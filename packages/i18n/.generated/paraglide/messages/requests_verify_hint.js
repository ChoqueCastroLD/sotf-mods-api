/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Verify_HintInputs */

const en_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your e-mail to vote, comment or ask for a mod.`)
};

const es_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo para votar, comentar o pedir un mod.`)
};

const de_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail, um abzustimmen, zu kommentieren oder einen Mod zu wünschen.`)
};

const fr_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre e-mail pour voter, commenter ou demander un mod.`)
};

const it_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica la tua e-mail per votare, commentare o chiedere un mod.`)
};

const nl_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifieer je e-mail om te stemmen, te reageren of een mod te vragen.`)
};

const pl_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikuj e-mail, aby głosować, komentować lub prosić o moda.`)
};

const pt_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifique seu e-mail para votar, comentar ou pedir um mod.`)
};

const ru_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите e-mail, чтобы голосовать, комментировать или просить мод.`)
};

const sv_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera din e-post för att rösta, kommentera eller önska en mod.`)
};

const tr_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy vermek, yorum yapmak veya mod istemek için e-postanızı doğrulayın.`)
};

const zh_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证邮箱后即可投票、评论或提出请求。`)
};

const ja_requests_verify_hint = /** @type {(inputs: Requests_Verify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールを認証すると、投票・コメント・リクエストができます。`)
};

/**
* | output |
* | --- |
* | "Verify your e-mail to vote, comment or ask for a mod." |
*
* @param {Requests_Verify_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_verify_hint = /** @type {((inputs?: Requests_Verify_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Verify_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_verify_hint(inputs)
	if (locale === "de") return de_requests_verify_hint(inputs)
	if (locale === "fr") return fr_requests_verify_hint(inputs)
	if (locale === "it") return it_requests_verify_hint(inputs)
	if (locale === "nl") return nl_requests_verify_hint(inputs)
	if (locale === "pl") return pl_requests_verify_hint(inputs)
	if (locale === "pt") return pt_requests_verify_hint(inputs)
	if (locale === "ru") return ru_requests_verify_hint(inputs)
	if (locale === "sv") return sv_requests_verify_hint(inputs)
	if (locale === "tr") return tr_requests_verify_hint(inputs)
	if (locale === "zh") return zh_requests_verify_hint(inputs)
	if (locale === "ja") return ja_requests_verify_hint(inputs)
	return en_requests_verify_hint(inputs)
});
