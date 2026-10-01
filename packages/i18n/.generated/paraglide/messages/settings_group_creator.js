/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Group_CreatorInputs */

const en_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator and data`)
};

const es_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador y datos`)
};

const de_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator und Daten`)
};

const fr_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur et données`)
};

const it_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator e dati`)
};

const nl_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maker en gegevens`)
};

const pl_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca i dane`)
};

const pt_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador e dados`)
};

const ru_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор и данные`)
};

const sv_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare och data`)
};

const tr_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üretici ve veriler`)
};

const zh_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者与数据`)
};

const ja_settings_group_creator = /** @type {(inputs: Settings_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターとデータ`)
};

/**
* | output |
* | --- |
* | "Creator and data" |
*
* @param {Settings_Group_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_group_creator = /** @type {((inputs?: Settings_Group_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Group_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_group_creator(inputs)
	if (locale === "de") return de_settings_group_creator(inputs)
	if (locale === "fr") return fr_settings_group_creator(inputs)
	if (locale === "it") return it_settings_group_creator(inputs)
	if (locale === "nl") return nl_settings_group_creator(inputs)
	if (locale === "pl") return pl_settings_group_creator(inputs)
	if (locale === "pt") return pt_settings_group_creator(inputs)
	if (locale === "ru") return ru_settings_group_creator(inputs)
	if (locale === "sv") return sv_settings_group_creator(inputs)
	if (locale === "tr") return tr_settings_group_creator(inputs)
	if (locale === "zh") return zh_settings_group_creator(inputs)
	if (locale === "ja") return ja_settings_group_creator(inputs)
	return en_settings_group_creator(inputs)
});
