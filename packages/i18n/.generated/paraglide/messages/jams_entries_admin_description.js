/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Admin_DescriptionInputs */

const en_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entries appear publicly as soon as they are submitted. Hide or disqualify the ones that break the rules.`)
};

const es_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las participaciones aparecen públicamente al enviarse. Oculta o descalifica las que incumplan las reglas.`)
};

const de_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beiträge erscheinen sofort öffentlich. Verberge oder disqualifiziere solche, die gegen die Regeln verstoßen.`)
};

const fr_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les participations apparaissent publiquement dès leur envoi. Masquez ou disqualifiez celles qui enfreignent les règles.`)
};

const it_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le iscrizioni compaiono pubblicamente appena inviate. Nascondi o squalifica quelle che violano le regole.`)
};

const nl_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen verschijnen direct openbaar. Verberg of diskwalificeer wie de regels overtreedt.`)
};

const pl_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia pojawiają się publicznie od razu. Ukryj lub zdyskwalifikuj te, które łamią zasady.`)
};

const pt_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As inscrições aparecem publicamente assim que são enviadas. Oculte ou desqualifique as que violarem as regras.`)
};

const ru_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работы появляются публично сразу после отправки. Скрывайте или дисквалифицируйте нарушающие правила.`)
};

const sv_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidrag visas offentligt direkt när de skickas in. Dölj eller diskvalificera de som bryter mot reglerna.`)
};

const tr_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurular gönderilir gönderilmez herkese açık görünür. Kuralları ihlal edenleri gizleyin veya diskalifiye edin.`)
};

const zh_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品提交后立即公开显示。请隐藏或取消违规作品的资格。`)
};

const ja_jams_entries_admin_description = /** @type {(inputs: Jams_Entries_Admin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品は応募後すぐに公開されます。ルール違反の作品は非表示または失格にしてください。`)
};

/**
* | output |
* | --- |
* | "Entries appear publicly as soon as they are submitted. Hide or disqualify the ones that break the rules." |
*
* @param {Jams_Entries_Admin_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_admin_description = /** @type {((inputs?: Jams_Entries_Admin_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Admin_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_admin_description(inputs)
	if (locale === "de") return de_jams_entries_admin_description(inputs)
	if (locale === "fr") return fr_jams_entries_admin_description(inputs)
	if (locale === "it") return it_jams_entries_admin_description(inputs)
	if (locale === "nl") return nl_jams_entries_admin_description(inputs)
	if (locale === "pl") return pl_jams_entries_admin_description(inputs)
	if (locale === "pt") return pt_jams_entries_admin_description(inputs)
	if (locale === "ru") return ru_jams_entries_admin_description(inputs)
	if (locale === "sv") return sv_jams_entries_admin_description(inputs)
	if (locale === "tr") return tr_jams_entries_admin_description(inputs)
	if (locale === "zh") return zh_jams_entries_admin_description(inputs)
	if (locale === "ja") return ja_jams_entries_admin_description(inputs)
	return en_jams_entries_admin_description(inputs)
});
