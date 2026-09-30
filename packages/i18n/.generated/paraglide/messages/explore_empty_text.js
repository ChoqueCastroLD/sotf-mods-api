/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Empty_TextInputs */

const en_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No mods match all of these filters. Remove one and try again.`)
};

const es_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún mod cumple todos estos filtros. Quita alguno y vuelve a intentarlo.`)
};

const de_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Mod erfüllt alle diese Filter. Entferne einen und versuch es noch einmal.`)
};

const fr_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod ne correspond à tous ces filtres. Retirez-en un et réessayez.`)
};

const it_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna mod soddisfa tutti questi filtri. Rimuovine uno e riprova.`)
};

const nl_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen enkele mod voldoet aan al deze filters. Haal er een weg en probeer het opnieuw.`)
};

const pl_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden mod nie spełnia wszystkich tych filtrów. Usuń któryś i spróbuj ponownie.`)
};

const pt_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum mod atende a todos estes filtros. Remova algum e tente de novo.`)
};

const ru_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ни один мод не подходит под все эти фильтры. Уберите какой-нибудь и попробуйте снова.`)
};

const sv_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen modd matchar alla de här filtren. Ta bort ett och försök igen.`)
};

const tr_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu filtrelerin hepsine uyan mod yok. Birini kaldırıp yeniden dene.`)
};

const zh_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有模组同时符合这些筛选条件。移除一个后再试。`)
};

const ja_explore_empty_text = /** @type {(inputs: Explore_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての条件に合う MOD はありません。条件をひとつ外して、もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "No mods match all of these filters. Remove one and try again." |
*
* @param {Explore_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_empty_text = /** @type {((inputs?: Explore_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_empty_text(inputs)
	if (locale === "de") return de_explore_empty_text(inputs)
	if (locale === "fr") return fr_explore_empty_text(inputs)
	if (locale === "it") return it_explore_empty_text(inputs)
	if (locale === "nl") return nl_explore_empty_text(inputs)
	if (locale === "pl") return pl_explore_empty_text(inputs)
	if (locale === "pt") return pt_explore_empty_text(inputs)
	if (locale === "ru") return ru_explore_empty_text(inputs)
	if (locale === "sv") return sv_explore_empty_text(inputs)
	if (locale === "tr") return tr_explore_empty_text(inputs)
	if (locale === "zh") return zh_explore_empty_text(inputs)
	if (locale === "ja") return ja_explore_empty_text(inputs)
	return en_explore_empty_text(inputs)
});
