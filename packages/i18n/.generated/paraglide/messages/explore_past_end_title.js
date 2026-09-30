/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Past_End_TitleInputs */

const en_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You reached the end of the list`)
};

const es_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Has llegado al final de la lista`)
};

const de_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du bist am Ende der Liste`)
};

const fr_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous êtes au bout de la liste`)
};

const it_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei arrivato alla fine dell’elenco`)
};

const nl_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je bent aan het einde van de lijst`)
};

const pl_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dotarłeś do końca listy`)
};

const pt_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você chegou ao fim da lista`)
};

const ru_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы дошли до конца списка`)
};

const sv_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har nått slutet av listan`)
};

const tr_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listenin sonuna geldin`)
};

const zh_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已到达列表末尾`)
};

const ja_explore_past_end_title = /** @type {(inputs: Explore_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リストの最後に到達しました`)
};

/**
* | output |
* | --- |
* | "You reached the end of the list" |
*
* @param {Explore_Past_End_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_past_end_title = /** @type {((inputs?: Explore_Past_End_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Past_End_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_past_end_title(inputs)
	if (locale === "de") return de_explore_past_end_title(inputs)
	if (locale === "fr") return fr_explore_past_end_title(inputs)
	if (locale === "it") return it_explore_past_end_title(inputs)
	if (locale === "nl") return nl_explore_past_end_title(inputs)
	if (locale === "pl") return pl_explore_past_end_title(inputs)
	if (locale === "pt") return pt_explore_past_end_title(inputs)
	if (locale === "ru") return ru_explore_past_end_title(inputs)
	if (locale === "sv") return sv_explore_past_end_title(inputs)
	if (locale === "tr") return tr_explore_past_end_title(inputs)
	if (locale === "zh") return zh_explore_past_end_title(inputs)
	if (locale === "ja") return ja_explore_past_end_title(inputs)
	return en_explore_past_end_title(inputs)
});
