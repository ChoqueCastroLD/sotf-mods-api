/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Ranger_User_Suspended_UntilInputs */

const en_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Suspended until ${i?.date}`)
};

const es_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Suspendido hasta el ${i?.date}`)
};

const de_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Suspendiert bis ${i?.date}`)
};

const fr_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Suspendu jusqu’au ${i?.date}`)
};

const it_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sospeso fino al ${i?.date}`)
};

const nl_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geschorst tot ${i?.date}`)
};

const pl_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zawieszony do ${i?.date}`)
};

const pt_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Suspenso até ${i?.date}`)
};

const ru_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Приостановлен до ${i?.date}`)
};

const sv_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avstängd till ${i?.date}`)
};

const tr_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Askıda: ${i?.date} tarihine kadar`)
};

const zh_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`停用至 ${i?.date}`)
};

const ja_ranger_user_suspended_until = /** @type {(inputs: Ranger_User_Suspended_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} まで停止中`)
};

/**
* | output |
* | --- |
* | "Suspended until {date}" |
*
* @param {Ranger_User_Suspended_UntilInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_suspended_until = /** @type {((inputs: Ranger_User_Suspended_UntilInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Suspended_UntilInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_suspended_until(inputs)
	if (locale === "de") return de_ranger_user_suspended_until(inputs)
	if (locale === "fr") return fr_ranger_user_suspended_until(inputs)
	if (locale === "it") return it_ranger_user_suspended_until(inputs)
	if (locale === "nl") return nl_ranger_user_suspended_until(inputs)
	if (locale === "pl") return pl_ranger_user_suspended_until(inputs)
	if (locale === "pt") return pt_ranger_user_suspended_until(inputs)
	if (locale === "ru") return ru_ranger_user_suspended_until(inputs)
	if (locale === "sv") return sv_ranger_user_suspended_until(inputs)
	if (locale === "tr") return tr_ranger_user_suspended_until(inputs)
	if (locale === "zh") return zh_ranger_user_suspended_until(inputs)
	if (locale === "ja") return ja_ranger_user_suspended_until(inputs)
	return en_ranger_user_suspended_until(inputs)
});
