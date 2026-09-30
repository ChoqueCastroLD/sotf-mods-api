/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ seconds: NonNullable<unknown> }} Auth_Rate_Limited_SubmitInputs */

const en_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("en", i?.seconds, {});return /** @type {LocalizedString} */ (`Wait ${seconds__number} s`)
};

const es_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("es", i?.seconds, {});return /** @type {LocalizedString} */ (`Espera ${seconds__number} s`)
};

const de_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("de", i?.seconds, {});return /** @type {LocalizedString} */ (`Warte ${seconds__number} s`)
};

const fr_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("fr", i?.seconds, {});return /** @type {LocalizedString} */ (`Patientez ${seconds__number} s`)
};

const it_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("it", i?.seconds, {});return /** @type {LocalizedString} */ (`Aspetta ${seconds__number} s`)
};

const nl_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("nl", i?.seconds, {});return /** @type {LocalizedString} */ (`Wacht ${seconds__number} s`)
};

const pl_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("pl", i?.seconds, {});return /** @type {LocalizedString} */ (`Odczekaj ${seconds__number} s`)
};

const pt_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("pt", i?.seconds, {});return /** @type {LocalizedString} */ (`Aguarde ${seconds__number} s`)
};

const ru_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("ru", i?.seconds, {});return /** @type {LocalizedString} */ (`Подождите ${seconds__number} с`)
};

const sv_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("sv", i?.seconds, {});return /** @type {LocalizedString} */ (`Vänta ${seconds__number} s`)
};

const tr_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("tr", i?.seconds, {});return /** @type {LocalizedString} */ (`${seconds__number} sn bekle`)
};

const zh_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("zh", i?.seconds, {});return /** @type {LocalizedString} */ (`请等待 ${seconds__number} 秒`)
};

const ja_auth_rate_limited_submit = /** @type {(inputs: Auth_Rate_Limited_SubmitInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("ja", i?.seconds, {});return /** @type {LocalizedString} */ (`${seconds__number} 秒お待ちください`)
};

/**
* | output |
* | --- |
* | "Wait {seconds__number} s" |
*
* @param {Auth_Rate_Limited_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_rate_limited_submit = /** @type {((inputs: Auth_Rate_Limited_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Rate_Limited_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_rate_limited_submit(inputs)
	if (locale === "de") return de_auth_rate_limited_submit(inputs)
	if (locale === "fr") return fr_auth_rate_limited_submit(inputs)
	if (locale === "it") return it_auth_rate_limited_submit(inputs)
	if (locale === "nl") return nl_auth_rate_limited_submit(inputs)
	if (locale === "pl") return pl_auth_rate_limited_submit(inputs)
	if (locale === "pt") return pt_auth_rate_limited_submit(inputs)
	if (locale === "ru") return ru_auth_rate_limited_submit(inputs)
	if (locale === "sv") return sv_auth_rate_limited_submit(inputs)
	if (locale === "tr") return tr_auth_rate_limited_submit(inputs)
	if (locale === "zh") return zh_auth_rate_limited_submit(inputs)
	if (locale === "ja") return ja_auth_rate_limited_submit(inputs)
	return en_auth_rate_limited_submit(inputs)
});
