/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Revoke_TitleInputs */

const en_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoke this sanction?`)
};

const es_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Revocar esta sanción?`)
};

const de_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Sanktion aufheben?`)
};

const fr_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lever cette sanction ?`)
};

const it_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revocare questa sanzione?`)
};

const nl_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze sanctie intrekken?`)
};

const pl_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnąć tę sankcję?`)
};

const pt_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revogar esta sanção?`)
};

const ru_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снять эту санкцию?`)
};

const sv_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återkalla sanktionen?`)
};

const tr_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yaptırım kaldırılsın mı?`)
};

const zh_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销此处罚？`)
};

const ja_ranger_sanction_revoke_title = /** @type {(inputs: Ranger_Sanction_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この制裁を解除しますか？`)
};

/**
* | output |
* | --- |
* | "Revoke this sanction?" |
*
* @param {Ranger_Sanction_Revoke_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_revoke_title = /** @type {((inputs?: Ranger_Sanction_Revoke_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Revoke_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_revoke_title(inputs)
	if (locale === "de") return de_ranger_sanction_revoke_title(inputs)
	if (locale === "fr") return fr_ranger_sanction_revoke_title(inputs)
	if (locale === "it") return it_ranger_sanction_revoke_title(inputs)
	if (locale === "nl") return nl_ranger_sanction_revoke_title(inputs)
	if (locale === "pl") return pl_ranger_sanction_revoke_title(inputs)
	if (locale === "pt") return pt_ranger_sanction_revoke_title(inputs)
	if (locale === "ru") return ru_ranger_sanction_revoke_title(inputs)
	if (locale === "sv") return sv_ranger_sanction_revoke_title(inputs)
	if (locale === "tr") return tr_ranger_sanction_revoke_title(inputs)
	if (locale === "zh") return zh_ranger_sanction_revoke_title(inputs)
	if (locale === "ja") return ja_ranger_sanction_revoke_title(inputs)
	return en_ranger_sanction_revoke_title(inputs)
});
