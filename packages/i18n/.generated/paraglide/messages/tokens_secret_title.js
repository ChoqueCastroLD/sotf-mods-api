/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Secret_TitleInputs */

const en_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy your token now`)
};

const es_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia tu token ahora`)
};

const de_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiere deinen Token jetzt`)
};

const fr_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiez votre jeton maintenant`)
};

const it_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia ora il tuo token`)
};

const nl_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopieer je token nu`)
};

const pl_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiuj token teraz`)
};

const pt_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copie seu token agora`)
};

const ru_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скопируйте токен сейчас`)
};

const sv_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera din token nu`)
};

const tr_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belirtecini şimdi kopyala`)
};

const zh_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请立即复制你的令牌`)
};

const ja_tokens_secret_title = /** @type {(inputs: Tokens_Secret_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今すぐトークンをコピーしてください`)
};

/**
* | output |
* | --- |
* | "Copy your token now" |
*
* @param {Tokens_Secret_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_secret_title = /** @type {((inputs?: Tokens_Secret_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Secret_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_secret_title(inputs)
	if (locale === "de") return de_tokens_secret_title(inputs)
	if (locale === "fr") return fr_tokens_secret_title(inputs)
	if (locale === "it") return it_tokens_secret_title(inputs)
	if (locale === "nl") return nl_tokens_secret_title(inputs)
	if (locale === "pl") return pl_tokens_secret_title(inputs)
	if (locale === "pt") return pt_tokens_secret_title(inputs)
	if (locale === "ru") return ru_tokens_secret_title(inputs)
	if (locale === "sv") return sv_tokens_secret_title(inputs)
	if (locale === "tr") return tr_tokens_secret_title(inputs)
	if (locale === "zh") return zh_tokens_secret_title(inputs)
	if (locale === "ja") return ja_tokens_secret_title(inputs)
	return en_tokens_secret_title(inputs)
});
