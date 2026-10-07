/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_Group_CreatorInputs */

const en_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator and data`)
};

const es_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador y datos`)
};

const de_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersteller und Daten`)
};

const fr_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur et données`)
};

const it_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore e dati`)
};

const nl_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maker en gegevens`)
};

const pl_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca i dane`)
};

const pt_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador e dados`)
};

const ru_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор и данные`)
};

const sv_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare och data`)
};

const tr_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı ve veriler`)
};

const zh_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者与数据`)
};

const ja_console_nav_group_creator = /** @type {(inputs: Console_Nav_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターとデータ`)
};

/**
* | output |
* | --- |
* | "Creator and data" |
*
* @param {Console_Nav_Group_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_group_creator = /** @type {((inputs?: Console_Nav_Group_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_Group_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_group_creator(inputs)
	if (locale === "de") return de_console_nav_group_creator(inputs)
	if (locale === "fr") return fr_console_nav_group_creator(inputs)
	if (locale === "it") return it_console_nav_group_creator(inputs)
	if (locale === "nl") return nl_console_nav_group_creator(inputs)
	if (locale === "pl") return pl_console_nav_group_creator(inputs)
	if (locale === "pt") return pt_console_nav_group_creator(inputs)
	if (locale === "ru") return ru_console_nav_group_creator(inputs)
	if (locale === "sv") return sv_console_nav_group_creator(inputs)
	if (locale === "tr") return tr_console_nav_group_creator(inputs)
	if (locale === "zh") return zh_console_nav_group_creator(inputs)
	if (locale === "ja") return ja_console_nav_group_creator(inputs)
	return en_console_nav_group_creator(inputs)
});
