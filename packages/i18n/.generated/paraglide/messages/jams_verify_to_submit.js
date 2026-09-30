/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Verify_To_SubmitInputs */

const en_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email to submit`)
};

const es_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo para participar`)
};

const de_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail bestätigen, um einzureichen`)
};

const fr_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre e-mail pour participer`)
};

const it_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica l'e-mail per iscriverti`)
};

const nl_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifieer je e-mail om in te zenden`)
};

const pl_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikuj e-mail, aby zgłosić pracę`)
};

const pt_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifique o e-mail para participar`)
};

const ru_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите почту, чтобы участвовать`)
};

const sv_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera din e-post för att skicka in`)
};

const tr_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuru için e-postanızı doğrulayın`)
};

const zh_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证邮箱后方可投稿`)
};

const ja_jams_verify_to_submit = /** @type {(inputs: Jams_Verify_To_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募するにはメール認証が必要です`)
};

/**
* | output |
* | --- |
* | "Verify your email to submit" |
*
* @param {Jams_Verify_To_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_verify_to_submit = /** @type {((inputs?: Jams_Verify_To_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Verify_To_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_verify_to_submit(inputs)
	if (locale === "de") return de_jams_verify_to_submit(inputs)
	if (locale === "fr") return fr_jams_verify_to_submit(inputs)
	if (locale === "it") return it_jams_verify_to_submit(inputs)
	if (locale === "nl") return nl_jams_verify_to_submit(inputs)
	if (locale === "pl") return pl_jams_verify_to_submit(inputs)
	if (locale === "pt") return pt_jams_verify_to_submit(inputs)
	if (locale === "ru") return ru_jams_verify_to_submit(inputs)
	if (locale === "sv") return sv_jams_verify_to_submit(inputs)
	if (locale === "tr") return tr_jams_verify_to_submit(inputs)
	if (locale === "zh") return zh_jams_verify_to_submit(inputs)
	if (locale === "ja") return ja_jams_verify_to_submit(inputs)
	return en_jams_verify_to_submit(inputs)
});
