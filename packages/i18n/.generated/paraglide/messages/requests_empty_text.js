/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Empty_TextInputs */

const en_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nobody has asked for a mod in this view. Be the first to describe the one you are missing.`)
};

const es_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nadie ha pedido un mod aquí. Sé el primero en describir el que te falta.`)
};

const de_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier hat noch niemand einen Mod gewünscht. Beschreibe als Erste:r den Mod, der dir fehlt.`)
};

const fr_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personne n’a demandé de mod ici. Soyez le premier à décrire celui qui vous manque.`)
};

const it_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuno ha chiesto un mod qui. Sii il primo a descrivere quello che ti manca.`)
};

const nl_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier heeft nog niemand een mod gevraagd. Beschrijf als eerste de mod die je mist.`)
};

const pl_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nikt jeszcze o nic tu nie poprosił. Opisz jako pierwszy moda, którego ci brakuje.`)
};

const pt_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguém pediu um mod aqui. Seja o primeiro a descrever o que falta para você.`)
};

const ru_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь пока никто ничего не просил. Опишите первым мод, которого вам не хватает.`)
};

const sv_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen har önskat en mod här än. Beskriv den du saknar som första person.`)
};

const tr_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Burada henüz kimse mod istemedi. Eksik olan modu ilk anlatan siz olun.`)
};

const zh_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这里还没有人请求模组。来描述你缺少的那个吧。`)
};

const ja_requests_empty_text = /** @type {(inputs: Requests_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここにはまだリクエストがありません。ほしい MOD を最初に書いてみましょう。`)
};

/**
* | output |
* | --- |
* | "Nobody has asked for a mod in this view. Be the first to describe the one you are missing." |
*
* @param {Requests_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_empty_text = /** @type {((inputs?: Requests_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_empty_text(inputs)
	if (locale === "de") return de_requests_empty_text(inputs)
	if (locale === "fr") return fr_requests_empty_text(inputs)
	if (locale === "it") return it_requests_empty_text(inputs)
	if (locale === "nl") return nl_requests_empty_text(inputs)
	if (locale === "pl") return pl_requests_empty_text(inputs)
	if (locale === "pt") return pt_requests_empty_text(inputs)
	if (locale === "ru") return ru_requests_empty_text(inputs)
	if (locale === "sv") return sv_requests_empty_text(inputs)
	if (locale === "tr") return tr_requests_empty_text(inputs)
	if (locale === "zh") return zh_requests_empty_text(inputs)
	if (locale === "ja") return ja_requests_empty_text(inputs)
	return en_requests_empty_text(inputs)
});
