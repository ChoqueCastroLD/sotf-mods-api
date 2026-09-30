/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_NoneInputs */

const en_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything in your backpack is up to date.`)
};

const es_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo lo de tu mochila está al día.`)
};

const de_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles in deinem Rucksack ist aktuell.`)
};

const fr_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout ce qui est dans votre sac à dos est à jour.`)
};

const it_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto ciò che hai nello zaino è aggiornato.`)
};

const nl_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles in je rugzak is up-to-date.`)
};

const pl_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko w twoim plecaku jest aktualne.`)
};

const pt_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo na sua mochila está atualizado.`)
};

const ru_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё в вашем рюкзаке актуально.`)
};

const sv_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt i din ryggsäck är uppdaterat.`)
};

const tr_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırt çantandaki her şey güncel.`)
};

const zh_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你背包里的一切都是最新的。`)
};

const ja_landing_personal_none = /** @type {(inputs: Landing_Personal_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バックパックの中身はすべて最新です。`)
};

/**
* | output |
* | --- |
* | "Everything in your backpack is up to date." |
*
* @param {Landing_Personal_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_none = /** @type {((inputs?: Landing_Personal_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_none(inputs)
	if (locale === "de") return de_landing_personal_none(inputs)
	if (locale === "fr") return fr_landing_personal_none(inputs)
	if (locale === "it") return it_landing_personal_none(inputs)
	if (locale === "nl") return nl_landing_personal_none(inputs)
	if (locale === "pl") return pl_landing_personal_none(inputs)
	if (locale === "pt") return pt_landing_personal_none(inputs)
	if (locale === "ru") return ru_landing_personal_none(inputs)
	if (locale === "sv") return sv_landing_personal_none(inputs)
	if (locale === "tr") return tr_landing_personal_none(inputs)
	if (locale === "zh") return zh_landing_personal_none(inputs)
	if (locale === "ja") return ja_landing_personal_none(inputs)
	return en_landing_personal_none(inputs)
});
