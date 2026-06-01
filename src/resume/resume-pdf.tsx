import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { resume } from "./resume-data";

Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.3,
    color: "#111111",
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 40,
  },
  header: {
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.3,
    marginBottom: 2,
  },
  headline: {
    fontSize: 11,
    color: "#333333",
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    fontSize: 9.5,
    color: "#444444",
  },
  contactItem: {
    marginRight: 10,
  },
  link: {
    color: "#111111",
    textDecoration: "none",
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    borderBottomWidth: 1,
    borderBottomColor: "#222222",
    paddingBottom: 3,
    marginBottom: 6,
  },
  summary: {
    fontSize: 10,
    color: "#222222",
    textAlign: "justify",
  },
  skillsBlock: {
    marginBottom: 4,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.5,
  },
  skillList: {
    fontSize: 9.5,
    color: "#222222",
    marginTop: 1,
  },
  role: {
    marginBottom: 7,
  },
  earlierRole: {
    marginBottom: 4,
  },
  earlierLine: {
    fontSize: 9.5,
    color: "#222222",
  },
  roleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 2,
  },
  roleTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
    flex: 1,
  },
  rolePeriod: {
    fontSize: 9.5,
    color: "#333333",
    textAlign: "right",
    minWidth: 95,
  },
  roleMeta: {
    fontSize: 9.5,
    color: "#444444",
    marginBottom: 3,
  },
  bulletList: {
    marginTop: 1,
    paddingLeft: 2,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletDot: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    color: "#222222",
  },
  educationItem: {
    marginBottom: 6,
  },
  educationDegree: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  educationMeta: {
    fontSize: 9.5,
    color: "#444444",
    marginTop: 1,
  },
  simpleRow: {
    marginBottom: 4,
  },
  simpleTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.5,
  },
  simpleMeta: {
    fontSize: 9.5,
    color: "#444444",
  },
  languages: {
    fontSize: 9.5,
    color: "#222222",
  },
});

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <View style={styles.bulletList}>
      {items.map((item) => (
        <View key={item} style={styles.bullet} wrap={false}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function SkillsSection() {
  const groups = [
    { label: "Leadership", items: resume.skills.leadership },
    { label: "Frontend", items: resume.skills.frontend },
    { label: "Backend & APIs", items: resume.skills.backend },
    { label: "Practices", items: resume.skills.practices },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Core Skills</Text>
      {groups.map((group) => (
        <View key={group.label} style={styles.skillsBlock}>
          <Text style={styles.skillLabel}>{group.label}: </Text>
          <Text style={styles.skillList}>{group.items.join(" · ")}</Text>
        </View>
      ))}
    </View>
  );
}

export function ResumeDocument() {
  return (
    <Document
      title={`${resume.name} — Resume`}
      author={resume.name}
      subject="Resume"
      language="en"
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resume.name}</Text>
          <Text style={styles.headline}>{resume.headline}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{resume.contact.location}</Text>
            <Link src={resume.contact.linkedinUrl} style={styles.link}>
              <Text style={styles.contactItem}>{resume.contact.linkedin}</Text>
            </Link>
            <Link src={resume.contact.githubUrl} style={styles.link}>
              <Text style={styles.contactItem}>{resume.contact.github}</Text>
            </Link>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summary}>{resume.summary}</Text>
        </View>

        <SkillsSection />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {resume.experience.map((role) => (
            <View key={`${role.company}-${role.period}`} style={styles.role}>
              <View style={styles.roleHeader}>
                <Text style={styles.roleTitle}>
                  {role.title} — {role.company}
                </Text>
                <Text style={styles.rolePeriod}>{role.period}</Text>
              </View>
              <Text style={styles.roleMeta}>{role.location}</Text>
              <BulletList items={role.bullets} />
            </View>
          ))}

          <Text
            style={{
              fontFamily: "Helvetica-Bold",
              fontSize: 9.5,
              marginTop: 4,
              marginBottom: 4,
              color: "#333333",
            }}
          >
            Earlier Experience
          </Text>
          {resume.experienceEarlier.map((role) => (
            <View
              key={`${role.company}-${role.period}`}
              style={styles.earlierRole}
            >
              <Text style={styles.earlierLine}>
                {role.title} — {role.company} · {role.location} · {role.period}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {resume.education.map((item) => (
            <View key={item.school} style={styles.educationItem}>
              <Text style={styles.educationDegree}>{item.degree}</Text>
              <Text style={styles.educationMeta}>
                {item.school} · {item.period}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Certifications, Awards & Languages
          </Text>
          {resume.certifications.map((cert) => (
            <View key={cert.name} style={styles.simpleRow}>
              <Text style={styles.simpleTitle}>{cert.name}</Text>
              <Text style={styles.simpleMeta}>
                {cert.issuer} · {cert.date}
              </Text>
            </View>
          ))}
          {resume.awards.map((award) => (
            <View key={award.name} style={styles.simpleRow}>
              <Text style={styles.simpleTitle}>{award.name}</Text>
              <Text style={styles.simpleMeta}>
                {award.date} — {award.detail}
              </Text>
            </View>
          ))}
          <Text style={[styles.languages, { marginTop: 4 }]}>
            {resume.languages.join(" · ")}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
