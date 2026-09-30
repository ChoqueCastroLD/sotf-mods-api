/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Featured_Badges_EmptyInputs */

const en_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Earn badges on the island to feature them here.`)
};

const es_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consigue insignias en la isla para destacarlas aquí.`)
};

const de_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdiene Abzeichen auf der Insel, um sie hier hervorzuheben.`)
};

const fr_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obtiens des badges sur l’île pour les mettre en avant ici.`)
};

const it_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ottieni distintivi sull’isola per metterli in evidenza qui.`)
};

const nl_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdien badges op het eiland om ze hier uit te lichten.`)
};

const pl_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zdobywaj odznaki na wyspie, aby je tu wyróżnić.`)
};

const pt_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conquiste insígnias na ilha para destacá-las aqui.`)
};

const ru_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Получайте значки на острове, чтобы выбрать их здесь.`)
};

const sv_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tjäna märken på ön för att visa dem här.`)
};

const tr_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Burada öne çıkarmak için adada rozet kazan.`)
};

const zh_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在岛上获得徽章后即可在此展示。`)
};

const ja_settings_featured_badges_empty = /** @type {(inputs: Settings_Featured_Badges_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島でバッジを獲得すると、ここで選べます。`)
};

/**
* | output |
* | --- |
* | "Earn badges on the island to feature them here." |
*
* @param {Settings_Featured_Badges_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_featured_badges_empty = /** @type {((inputs?: Settings_Featured_Badges_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Featured_Badges_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_featured_badges_empty(inputs)
	if (locale === "de") return de_settings_featured_badges_empty(inputs)
	if (locale === "fr") return fr_settings_featured_badges_empty(inputs)
	if (locale === "it") return it_settings_featured_badges_empty(inputs)
	if (locale === "nl") return nl_settings_featured_badges_empty(inputs)
	if (locale === "pl") return pl_settings_featured_badges_empty(inputs)
	if (locale === "pt") return pt_settings_featured_badges_empty(inputs)
	if (locale === "ru") return ru_settings_featured_badges_empty(inputs)
	if (locale === "sv") return sv_settings_featured_badges_empty(inputs)
	if (locale === "tr") return tr_settings_featured_badges_empty(inputs)
	if (locale === "zh") return zh_settings_featured_badges_empty(inputs)
	if (locale === "ja") return ja_settings_featured_badges_empty(inputs)
	return en_settings_featured_badges_empty(inputs)
});
