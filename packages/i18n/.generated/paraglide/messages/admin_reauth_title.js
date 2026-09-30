/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Reauth_TitleInputs */

const en_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm it’s you`)
};

const es_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirma que eres tú`)
};

const de_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige, dass du es bist`)
};

const fr_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmez que c’est bien vous`)
};

const it_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma che sei tu`)
};

const nl_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig dat jij het bent`)
};

const pl_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź, że to ty`)
};

const pt_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme que é você`)
};

const ru_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите, что это вы`)
};

const sv_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta att det är du`)
};

const tr_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sen olduğunu doğrula`)
};

const zh_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请确认是你本人`)
};

const ja_admin_reauth_title = /** @type {(inputs: Admin_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ご本人確認`)
};

/**
* | output |
* | --- |
* | "Confirm it’s you" |
*
* @param {Admin_Reauth_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_reauth_title = /** @type {((inputs?: Admin_Reauth_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Reauth_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_reauth_title(inputs)
	if (locale === "de") return de_admin_reauth_title(inputs)
	if (locale === "fr") return fr_admin_reauth_title(inputs)
	if (locale === "it") return it_admin_reauth_title(inputs)
	if (locale === "nl") return nl_admin_reauth_title(inputs)
	if (locale === "pl") return pl_admin_reauth_title(inputs)
	if (locale === "pt") return pt_admin_reauth_title(inputs)
	if (locale === "ru") return ru_admin_reauth_title(inputs)
	if (locale === "sv") return sv_admin_reauth_title(inputs)
	if (locale === "tr") return tr_admin_reauth_title(inputs)
	if (locale === "zh") return zh_admin_reauth_title(inputs)
	if (locale === "ja") return ja_admin_reauth_title(inputs)
	return en_admin_reauth_title(inputs)
});
