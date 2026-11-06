/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Unapprove_TitleInputs */

const en_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Unapprove ${i?.name}?`)
};

const es_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Desaprobar ${i?.name}?`)
};

const de_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Freigabe von ${i?.name} zurückziehen?`)
};

const fr_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer l’approbation de ${i?.name} ?`)
};

const it_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Revocare l’approvazione di ${i?.name}?`)
};

const nl_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Goedkeuring van ${i?.name} intrekken?`)
};

const pl_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cofnąć zatwierdzenie ${i?.name}?`)
};

const pt_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Revogar a aprovação de ${i?.name}?`)
};

const ru_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отменить одобрение ${i?.name}?`)
};

const sv_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dra tillbaka godkännandet av ${i?.name}?`)
};

const tr_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} onayı kaldırılsın mı?`)
};

const zh_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`要取消批准 ${i?.name} 吗？`)
};

const ja_mod_unapprove_title = /** @type {(inputs: Mod_Unapprove_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の承認を取り消しますか？`)
};

/**
* | output |
* | --- |
* | "Unapprove {name}?" |
*
* @param {Mod_Unapprove_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_unapprove_title = /** @type {((inputs: Mod_Unapprove_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Unapprove_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_unapprove_title(inputs)
	if (locale === "de") return de_mod_unapprove_title(inputs)
	if (locale === "fr") return fr_mod_unapprove_title(inputs)
	if (locale === "it") return it_mod_unapprove_title(inputs)
	if (locale === "nl") return nl_mod_unapprove_title(inputs)
	if (locale === "pl") return pl_mod_unapprove_title(inputs)
	if (locale === "pt") return pt_mod_unapprove_title(inputs)
	if (locale === "ru") return ru_mod_unapprove_title(inputs)
	if (locale === "sv") return sv_mod_unapprove_title(inputs)
	if (locale === "tr") return tr_mod_unapprove_title(inputs)
	if (locale === "zh") return zh_mod_unapprove_title(inputs)
	if (locale === "ja") return ja_mod_unapprove_title(inputs)
	return en_mod_unapprove_title(inputs)
});
