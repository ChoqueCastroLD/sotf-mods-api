/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Body_PlaceholderInputs */

const en_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What should it do? Why is it useful? Any mods it should work with?`)
};

const es_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Qué debería hacer? ¿Por qué es útil? ¿Con qué mods debería funcionar?`)
};

const de_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was soll er tun? Warum ist er nützlich? Mit welchen Mods soll er zusammenarbeiten?`)
};

const fr_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Que doit-il faire ? En quoi est-il utile ? Avec quels mods doit-il fonctionner ?`)
};

const it_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa dovrebbe fare? Perché è utile? Con quali mod dovrebbe funzionare?`)
};

const nl_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat moet hij doen? Waarom is hij nuttig? Met welke mods moet hij werken?`)
};

const pl_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co ma robić? Dlaczego jest przydatny? Z jakimi modami ma działać?`)
};

const pt_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que deve fazer? Por que é útil? Com quais mods deve funcionar?`)
};

const ru_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что он должен делать? Чем полезен? С какими модами должен работать?`)
};

const sv_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad ska den göra? Varför är den användbar? Vilka moddar ska den funka med?`)
};

const tr_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne yapmalı? Neden faydalı? Hangi modlarla çalışmalı?`)
};

const zh_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它应该做什么？为什么有用？需要兼容哪些模组？`)
};

const ja_requests_body_placeholder = /** @type {(inputs: Requests_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`何をする MOD ですか？なぜ便利ですか？併用したい MOD はありますか？`)
};

/**
* | output |
* | --- |
* | "What should it do? Why is it useful? Any mods it should work with?" |
*
* @param {Requests_Body_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_body_placeholder = /** @type {((inputs?: Requests_Body_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Body_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_body_placeholder(inputs)
	if (locale === "de") return de_requests_body_placeholder(inputs)
	if (locale === "fr") return fr_requests_body_placeholder(inputs)
	if (locale === "it") return it_requests_body_placeholder(inputs)
	if (locale === "nl") return nl_requests_body_placeholder(inputs)
	if (locale === "pl") return pl_requests_body_placeholder(inputs)
	if (locale === "pt") return pt_requests_body_placeholder(inputs)
	if (locale === "ru") return ru_requests_body_placeholder(inputs)
	if (locale === "sv") return sv_requests_body_placeholder(inputs)
	if (locale === "tr") return tr_requests_body_placeholder(inputs)
	if (locale === "zh") return zh_requests_body_placeholder(inputs)
	if (locale === "ja") return ja_requests_body_placeholder(inputs)
	return en_requests_body_placeholder(inputs)
});
