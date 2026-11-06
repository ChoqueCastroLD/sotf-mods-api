/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Unapprove_ActionInputs */

const en_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unapprove`)
};

const es_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desaprobar`)
};

const de_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Freigabe zurückziehen`)
};

const fr_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer l’approbation`)
};

const it_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoca approvazione`)
};

const nl_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Goedkeuring intrekken`)
};

const pl_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnij zatwierdzenie`)
};

const pt_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revogar aprovação`)
};

const ru_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить одобрение`)
};

const sv_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dra tillbaka godkännande`)
};

const tr_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onayı kaldır`)
};

const zh_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消批准`)
};

const ja_mod_unapprove_action = /** @type {(inputs: Mod_Unapprove_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認を取り消す`)
};

/**
* | output |
* | --- |
* | "Unapprove" |
*
* @param {Mod_Unapprove_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_unapprove_action = /** @type {((inputs?: Mod_Unapprove_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Unapprove_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_unapprove_action(inputs)
	if (locale === "de") return de_mod_unapprove_action(inputs)
	if (locale === "fr") return fr_mod_unapprove_action(inputs)
	if (locale === "it") return it_mod_unapprove_action(inputs)
	if (locale === "nl") return nl_mod_unapprove_action(inputs)
	if (locale === "pl") return pl_mod_unapprove_action(inputs)
	if (locale === "pt") return pt_mod_unapprove_action(inputs)
	if (locale === "ru") return ru_mod_unapprove_action(inputs)
	if (locale === "sv") return sv_mod_unapprove_action(inputs)
	if (locale === "tr") return tr_mod_unapprove_action(inputs)
	if (locale === "zh") return zh_mod_unapprove_action(inputs)
	if (locale === "ja") return ja_mod_unapprove_action(inputs)
	return en_mod_unapprove_action(inputs)
});
