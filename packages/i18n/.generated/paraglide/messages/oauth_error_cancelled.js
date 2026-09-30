/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Error_CancelledInputs */

const en_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You cancelled the Discord authorization.`)
};

const es_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelaste la autorización de Discord.`)
};

const de_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast die Discord-Autorisierung abgebrochen.`)
};

const fr_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez annulé l’autorisation Discord.`)
};

const it_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai annullato l’autorizzazione di Discord.`)
};

const nl_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt de Discord-autorisatie geannuleerd.`)
};

const pl_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anulowano autoryzację w Discordzie.`)
};

const pt_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você cancelou a autorização do Discord.`)
};

const ru_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы отменили авторизацию в Discord.`)
};

const sv_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du avbröt Discord-auktoriseringen.`)
};

const tr_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord yetkilendirmesini iptal ettin.`)
};

const zh_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你取消了 Discord 授权。`)
};

const ja_oauth_error_cancelled = /** @type {(inputs: Oauth_Error_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord の認可をキャンセルしました。`)
};

/**
* | output |
* | --- |
* | "You cancelled the Discord authorization." |
*
* @param {Oauth_Error_CancelledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_error_cancelled = /** @type {((inputs?: Oauth_Error_CancelledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Error_CancelledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_error_cancelled(inputs)
	if (locale === "de") return de_oauth_error_cancelled(inputs)
	if (locale === "fr") return fr_oauth_error_cancelled(inputs)
	if (locale === "it") return it_oauth_error_cancelled(inputs)
	if (locale === "nl") return nl_oauth_error_cancelled(inputs)
	if (locale === "pl") return pl_oauth_error_cancelled(inputs)
	if (locale === "pt") return pt_oauth_error_cancelled(inputs)
	if (locale === "ru") return ru_oauth_error_cancelled(inputs)
	if (locale === "sv") return sv_oauth_error_cancelled(inputs)
	if (locale === "tr") return tr_oauth_error_cancelled(inputs)
	if (locale === "zh") return zh_oauth_error_cancelled(inputs)
	if (locale === "ja") return ja_oauth_error_cancelled(inputs)
	return en_oauth_error_cancelled(inputs)
});
