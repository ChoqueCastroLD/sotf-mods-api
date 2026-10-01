/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Empty_Unfiltered_TextInputs */

const en_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing has been published here yet.`)
};

const es_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no se ha publicado nada aquí.`)
};

const de_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier wurde noch nichts veröffentlicht.`)
};

const fr_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien n’a encore été publié ici.`)
};

const it_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qui non è ancora stato pubblicato nulla.`)
};

const nl_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier is nog niets gepubliceerd.`)
};

const pl_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic tu jeszcze nie opublikowano.`)
};

const pt_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada foi publicado aqui ainda.`)
};

const ru_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь пока ничего не опубликовано.`)
};

const sv_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget har publicerats här än.`)
};

const tr_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Burada henüz bir şey yayımlanmadı.`)
};

const zh_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这里还没有发布任何内容。`)
};

const ja_explore_empty_unfiltered_text = /** @type {(inputs: Explore_Empty_Unfiltered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここにはまだ何も公開されていません。`)
};

/**
* | output |
* | --- |
* | "Nothing has been published here yet." |
*
* @param {Explore_Empty_Unfiltered_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_empty_unfiltered_text = /** @type {((inputs?: Explore_Empty_Unfiltered_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Empty_Unfiltered_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_empty_unfiltered_text(inputs)
	if (locale === "de") return de_explore_empty_unfiltered_text(inputs)
	if (locale === "fr") return fr_explore_empty_unfiltered_text(inputs)
	if (locale === "it") return it_explore_empty_unfiltered_text(inputs)
	if (locale === "nl") return nl_explore_empty_unfiltered_text(inputs)
	if (locale === "pl") return pl_explore_empty_unfiltered_text(inputs)
	if (locale === "pt") return pt_explore_empty_unfiltered_text(inputs)
	if (locale === "ru") return ru_explore_empty_unfiltered_text(inputs)
	if (locale === "sv") return sv_explore_empty_unfiltered_text(inputs)
	if (locale === "tr") return tr_explore_empty_unfiltered_text(inputs)
	if (locale === "zh") return zh_explore_empty_unfiltered_text(inputs)
	if (locale === "ja") return ja_explore_empty_unfiltered_text(inputs)
	return en_explore_empty_unfiltered_text(inputs)
});
