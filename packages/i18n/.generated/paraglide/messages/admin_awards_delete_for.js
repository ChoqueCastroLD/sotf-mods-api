/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kind: NonNullable<unknown>, name: NonNullable<unknown> }} Admin_Awards_Delete_ForInputs */

const en_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Withdraw ${i?.kind} from ${i?.name}`)
};

const es_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirar ${i?.kind} a ${i?.name}`)
};

const de_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind} von ${i?.name} zurückziehen`)
};

const fr_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer ${i?.kind} à ${i?.name}`)
};

const it_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Revoca ${i?.kind} a ${i?.name}`)
};

const nl_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind} van ${i?.name} intrekken`)
};

const pl_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odbierz ${i?.kind} modowi ${i?.name}`)
};

const pt_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirar ${i?.kind} de ${i?.name}`)
};

const ru_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отозвать «${i?.kind}» у ${i?.name}`)
};

const sv_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dra tillbaka ${i?.kind} från ${i?.name}`)
};

const tr_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} modundan ${i?.kind} ödülünü geri al`)
};

const zh_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`撤销 ${i?.name} 的${i?.kind}`)
};

const ja_admin_awards_delete_for = /** @type {(inputs: Admin_Awards_Delete_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の${i?.kind}を取り消す`)
};

/**
* | output |
* | --- |
* | "Withdraw {kind} from {name}" |
*
* @param {Admin_Awards_Delete_ForInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_delete_for = /** @type {((inputs: Admin_Awards_Delete_ForInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Delete_ForInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_delete_for(inputs)
	if (locale === "de") return de_admin_awards_delete_for(inputs)
	if (locale === "fr") return fr_admin_awards_delete_for(inputs)
	if (locale === "it") return it_admin_awards_delete_for(inputs)
	if (locale === "nl") return nl_admin_awards_delete_for(inputs)
	if (locale === "pl") return pl_admin_awards_delete_for(inputs)
	if (locale === "pt") return pt_admin_awards_delete_for(inputs)
	if (locale === "ru") return ru_admin_awards_delete_for(inputs)
	if (locale === "sv") return sv_admin_awards_delete_for(inputs)
	if (locale === "tr") return tr_admin_awards_delete_for(inputs)
	if (locale === "zh") return zh_admin_awards_delete_for(inputs)
	if (locale === "ja") return ja_admin_awards_delete_for(inputs)
	return en_admin_awards_delete_for(inputs)
});
