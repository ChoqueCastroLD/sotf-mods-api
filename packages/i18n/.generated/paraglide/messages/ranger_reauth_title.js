/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reauth_TitleInputs */

const en_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm it’s you`)
};

const es_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirma que eres tú`)
};

const de_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige, dass du es bist`)
};

const fr_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmez que c’est vous`)
};

const it_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma che sei tu`)
};

const nl_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig dat jij het bent`)
};

const pl_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź, że to ty`)
};

const pt_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme que é você`)
};

const ru_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите, что это вы`)
};

const sv_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta att det är du`)
};

const tr_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siz olduğunuzu doğrulayın`)
};

const zh_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认是你本人`)
};

const ja_ranger_reauth_title = /** @type {(inputs: Ranger_Reauth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本人確認`)
};

/**
* | output |
* | --- |
* | "Confirm it’s you" |
*
* @param {Ranger_Reauth_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reauth_title = /** @type {((inputs?: Ranger_Reauth_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reauth_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reauth_title(inputs)
	if (locale === "de") return de_ranger_reauth_title(inputs)
	if (locale === "fr") return fr_ranger_reauth_title(inputs)
	if (locale === "it") return it_ranger_reauth_title(inputs)
	if (locale === "nl") return nl_ranger_reauth_title(inputs)
	if (locale === "pl") return pl_ranger_reauth_title(inputs)
	if (locale === "pt") return pt_ranger_reauth_title(inputs)
	if (locale === "ru") return ru_ranger_reauth_title(inputs)
	if (locale === "sv") return sv_ranger_reauth_title(inputs)
	if (locale === "tr") return tr_ranger_reauth_title(inputs)
	if (locale === "zh") return zh_ranger_reauth_title(inputs)
	if (locale === "ja") return ja_ranger_reauth_title(inputs)
	return en_ranger_reauth_title(inputs)
});
