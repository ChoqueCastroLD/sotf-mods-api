/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Export_SubjectInputs */

const en_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your SOTF Mods data export is ready`)
};

const es_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu exportación de datos de SOTF Mods está lista`)
};

const de_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein SOTF-Mods-Datenexport ist fertig`)
};

const fr_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre export de données SOTF Mods est prêt`)
};

const it_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’esportazione dei tuoi dati di SOTF Mods è pronta`)
};

const nl_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je SOTF Mods-gegevensexport staat klaar`)
};

const pl_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eksport Twoich danych z SOTF Mods jest gotowy`)
};

const pt_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua exportação de dados do SOTF Mods está pronta`)
};

const ru_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Экспорт ваших данных SOTF Mods готов`)
};

const sv_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din dataexport från SOTF Mods är klar`)
};

const tr_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods veri dışa aktarımın hazır`)
};

const zh_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的 SOTF Mods 数据导出已准备好`)
};

const ja_emails_auth_export_subject = /** @type {(inputs: Emails_Auth_Export_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods のデータエクスポートの準備ができました`)
};

/**
* | output |
* | --- |
* | "Your SOTF Mods data export is ready" |
*
* @param {Emails_Auth_Export_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_export_subject = /** @type {((inputs?: Emails_Auth_Export_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Export_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_export_subject(inputs)
	if (locale === "de") return de_emails_auth_export_subject(inputs)
	if (locale === "fr") return fr_emails_auth_export_subject(inputs)
	if (locale === "it") return it_emails_auth_export_subject(inputs)
	if (locale === "nl") return nl_emails_auth_export_subject(inputs)
	if (locale === "pl") return pl_emails_auth_export_subject(inputs)
	if (locale === "pt") return pt_emails_auth_export_subject(inputs)
	if (locale === "ru") return ru_emails_auth_export_subject(inputs)
	if (locale === "sv") return sv_emails_auth_export_subject(inputs)
	if (locale === "tr") return tr_emails_auth_export_subject(inputs)
	if (locale === "zh") return zh_emails_auth_export_subject(inputs)
	if (locale === "ja") return ja_emails_auth_export_subject(inputs)
	return en_emails_auth_export_subject(inputs)
});
