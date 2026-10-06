/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Guest_HintInputs */

const en_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in to vote, comment or ask for a mod.`)
};

const es_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para votar, comentar o pedir un mod.`)
};

const de_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an, um abzustimmen, zu kommentieren oder einen Mod zu wünschen.`)
};

const fr_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour voter, commenter ou demander un mod.`)
};

const it_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per votare, commentare o chiedere un mod.`)
};

const nl_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om te stemmen, te reageren of een mod te vragen.`)
};

const pl_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby głosować, komentować lub prosić o moda.`)
};

const pt_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para votar, comentar ou pedir um mod.`)
};

const ru_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы голосовать, комментировать или просить мод.`)
};

const sv_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att rösta, kommentera eller önska en mod.`)
};

const tr_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy vermek, yorum yapmak veya mod istemek için giriş yapın.`)
};

const zh_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后即可投票、评论或提出请求。`)
};

const ja_requests_guest_hint = /** @type {(inputs: Requests_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインすると、投票・コメント・リクエストができます。`)
};

/**
* | output |
* | --- |
* | "Log in to vote, comment or ask for a mod." |
*
* @param {Requests_Guest_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_guest_hint = /** @type {((inputs?: Requests_Guest_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Guest_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_guest_hint(inputs)
	if (locale === "de") return de_requests_guest_hint(inputs)
	if (locale === "fr") return fr_requests_guest_hint(inputs)
	if (locale === "it") return it_requests_guest_hint(inputs)
	if (locale === "nl") return nl_requests_guest_hint(inputs)
	if (locale === "pl") return pl_requests_guest_hint(inputs)
	if (locale === "pt") return pt_requests_guest_hint(inputs)
	if (locale === "ru") return ru_requests_guest_hint(inputs)
	if (locale === "sv") return sv_requests_guest_hint(inputs)
	if (locale === "tr") return tr_requests_guest_hint(inputs)
	if (locale === "zh") return zh_requests_guest_hint(inputs)
	if (locale === "ja") return ja_requests_guest_hint(inputs)
	return en_requests_guest_hint(inputs)
});
