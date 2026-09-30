/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Visibility_Unlisted_HintInputs */

const en_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only people with the link or the code.`)
};

const es_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo quien tenga el enlace o el código.`)
};

const de_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur wer den Link oder den Code hat.`)
};

const fr_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seulement avec le lien ou le code.`)
};

const it_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo chi ha il link o il codice.`)
};

const nl_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen met de link of de code.`)
};

const pl_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko osoby z linkiem lub kodem.`)
};

const pt_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só quem tem o link ou o código.`)
};

const ru_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только у кого есть ссылка или код.`)
};

const sv_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara den som har länken eller koden.`)
};

const tr_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca bağlantıya veya koda sahip olanlar.`)
};

const zh_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅持有链接或代码的人可见。`)
};

const ja_kits_visibility_unlisted_hint = /** @type {(inputs: Kits_Visibility_Unlisted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクかコードを知っている人だけ。`)
};

/**
* | output |
* | --- |
* | "Only people with the link or the code." |
*
* @param {Kits_Visibility_Unlisted_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_visibility_unlisted_hint = /** @type {((inputs?: Kits_Visibility_Unlisted_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Visibility_Unlisted_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_visibility_unlisted_hint(inputs)
	if (locale === "de") return de_kits_visibility_unlisted_hint(inputs)
	if (locale === "fr") return fr_kits_visibility_unlisted_hint(inputs)
	if (locale === "it") return it_kits_visibility_unlisted_hint(inputs)
	if (locale === "nl") return nl_kits_visibility_unlisted_hint(inputs)
	if (locale === "pl") return pl_kits_visibility_unlisted_hint(inputs)
	if (locale === "pt") return pt_kits_visibility_unlisted_hint(inputs)
	if (locale === "ru") return ru_kits_visibility_unlisted_hint(inputs)
	if (locale === "sv") return sv_kits_visibility_unlisted_hint(inputs)
	if (locale === "tr") return tr_kits_visibility_unlisted_hint(inputs)
	if (locale === "zh") return zh_kits_visibility_unlisted_hint(inputs)
	if (locale === "ja") return ja_kits_visibility_unlisted_hint(inputs)
	return en_kits_visibility_unlisted_hint(inputs)
});
