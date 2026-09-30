/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Discord_ContinueInputs */

const en_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue with Discord`)
};

const es_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar con Discord`)
};

const de_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit Discord fortfahren`)
};

const fr_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuer avec Discord`)
};

const it_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continua con Discord`)
};

const nl_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doorgaan met Discord`)
};

const pl_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontynuuj przez Discord`)
};

const pt_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar com o Discord`)
};

const ru_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Продолжить через Discord`)
};

const sv_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortsätt med Discord`)
};

const tr_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord ile devam et`)
};

const zh_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用 Discord 继续`)
};

const ja_oauth_discord_continue = /** @type {(inputs: Oauth_Discord_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord で続ける`)
};

/**
* | output |
* | --- |
* | "Continue with Discord" |
*
* @param {Oauth_Discord_ContinueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_discord_continue = /** @type {((inputs?: Oauth_Discord_ContinueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Discord_ContinueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_discord_continue(inputs)
	if (locale === "de") return de_oauth_discord_continue(inputs)
	if (locale === "fr") return fr_oauth_discord_continue(inputs)
	if (locale === "it") return it_oauth_discord_continue(inputs)
	if (locale === "nl") return nl_oauth_discord_continue(inputs)
	if (locale === "pl") return pl_oauth_discord_continue(inputs)
	if (locale === "pt") return pt_oauth_discord_continue(inputs)
	if (locale === "ru") return ru_oauth_discord_continue(inputs)
	if (locale === "sv") return sv_oauth_discord_continue(inputs)
	if (locale === "tr") return tr_oauth_discord_continue(inputs)
	if (locale === "zh") return zh_oauth_discord_continue(inputs)
	if (locale === "ja") return ja_oauth_discord_continue(inputs)
	return en_oauth_discord_continue(inputs)
});
