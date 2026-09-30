/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Secret_DoneInputs */

const en_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I’ve saved it`)
};

const es_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya lo guardé`)
};

const de_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ich habe ihn gespeichert`)
};

const fr_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je l’ai enregistré`)
};

const it_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’ho salvato`)
};

const nl_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ik heb hem bewaard`)
};

const pl_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisałem`)
};

const pt_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Já o guardei`)
};

const ru_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Я сохранил`)
};

const sv_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jag har sparat den`)
};

const tr_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydettim`)
};

const zh_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我已保存`)
};

const ja_tokens_secret_done = /** @type {(inputs: Tokens_Secret_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存しました`)
};

/**
* | output |
* | --- |
* | "I’ve saved it" |
*
* @param {Tokens_Secret_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_secret_done = /** @type {((inputs?: Tokens_Secret_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Secret_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_secret_done(inputs)
	if (locale === "de") return de_tokens_secret_done(inputs)
	if (locale === "fr") return fr_tokens_secret_done(inputs)
	if (locale === "it") return it_tokens_secret_done(inputs)
	if (locale === "nl") return nl_tokens_secret_done(inputs)
	if (locale === "pl") return pl_tokens_secret_done(inputs)
	if (locale === "pt") return pt_tokens_secret_done(inputs)
	if (locale === "ru") return ru_tokens_secret_done(inputs)
	if (locale === "sv") return sv_tokens_secret_done(inputs)
	if (locale === "tr") return tr_tokens_secret_done(inputs)
	if (locale === "zh") return zh_tokens_secret_done(inputs)
	if (locale === "ja") return ja_tokens_secret_done(inputs)
	return en_tokens_secret_done(inputs)
});
