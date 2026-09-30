/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_HintInputs */

const en_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Let scripts and tools use your account through the API.`)
};

const es_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permite que scripts y herramientas usen tu cuenta mediante la API.`)
};

const de_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erlaube Skripten und Tools, dein Konto über die API zu nutzen.`)
};

const fr_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autorisez scripts et outils à utiliser votre compte via l’API.`)
};

const it_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consenti a script e strumenti di usare il tuo account tramite l’API.`)
};

const nl_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laat scripts en tools je account gebruiken via de API.`)
};

const pl_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pozwól skryptom i narzędziom korzystać z konta przez API.`)
};

const pt_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permita que scripts e ferramentas usem sua conta pela API.`)
};

const ru_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разрешите скриптам и инструментам использовать ваш аккаунт через API.`)
};

const sv_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Låt skript och verktyg använda ditt konto via API:et.`)
};

const tr_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betiklerin ve araçların hesabını API üzerinden kullanmasına izin ver.`)
};

const zh_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`让脚本和工具通过 API 使用你的账号。`)
};

const ja_tokens_hint = /** @type {(inputs: Tokens_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スクリプトやツールが API 経由でアカウントを使えるようにします。`)
};

/**
* | output |
* | --- |
* | "Let scripts and tools use your account through the API." |
*
* @param {Tokens_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_hint = /** @type {((inputs?: Tokens_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_hint(inputs)
	if (locale === "de") return de_tokens_hint(inputs)
	if (locale === "fr") return fr_tokens_hint(inputs)
	if (locale === "it") return it_tokens_hint(inputs)
	if (locale === "nl") return nl_tokens_hint(inputs)
	if (locale === "pl") return pl_tokens_hint(inputs)
	if (locale === "pt") return pt_tokens_hint(inputs)
	if (locale === "ru") return ru_tokens_hint(inputs)
	if (locale === "sv") return sv_tokens_hint(inputs)
	if (locale === "tr") return tr_tokens_hint(inputs)
	if (locale === "zh") return zh_tokens_hint(inputs)
	if (locale === "ja") return ja_tokens_hint(inputs)
	return en_tokens_hint(inputs)
});
