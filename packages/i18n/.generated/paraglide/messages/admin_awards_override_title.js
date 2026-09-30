/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Override_TitleInputs */

const en_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replaces this week’s pick`)
};

const es_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sustituye la elección de esta semana`)
};

const de_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersetzt die Wahl dieser Woche`)
};

const fr_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remplace le choix de cette semaine`)
};

const it_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sostituisce la scelta di questa settimana`)
};

const nl_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vervangt de keuze van deze week`)
};

const pl_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zastępuje wybór z tego tygodnia`)
};

const pt_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Substitui a escolha desta semana`)
};

const ru_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заменяет выбор этой недели`)
};

const sv_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersätter veckans val`)
};

const tr_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu haftanın seçiminin yerini alır`)
};

const zh_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`替换本周的评选`)
};

const ja_admin_awards_override_title = /** @type {(inputs: Admin_Awards_Override_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週の選出を置き換えます`)
};

/**
* | output |
* | --- |
* | "Replaces this week’s pick" |
*
* @param {Admin_Awards_Override_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_override_title = /** @type {((inputs?: Admin_Awards_Override_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Override_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_override_title(inputs)
	if (locale === "de") return de_admin_awards_override_title(inputs)
	if (locale === "fr") return fr_admin_awards_override_title(inputs)
	if (locale === "it") return it_admin_awards_override_title(inputs)
	if (locale === "nl") return nl_admin_awards_override_title(inputs)
	if (locale === "pl") return pl_admin_awards_override_title(inputs)
	if (locale === "pt") return pt_admin_awards_override_title(inputs)
	if (locale === "ru") return ru_admin_awards_override_title(inputs)
	if (locale === "sv") return sv_admin_awards_override_title(inputs)
	if (locale === "tr") return tr_admin_awards_override_title(inputs)
	if (locale === "zh") return zh_admin_awards_override_title(inputs)
	if (locale === "ja") return ja_admin_awards_override_title(inputs)
	return en_admin_awards_override_title(inputs)
});
