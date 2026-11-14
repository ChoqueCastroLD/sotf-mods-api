/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Delete_ConfirmInputs */

const en_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete this modpack for good?`)
};

const es_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar este modpack definitivamente?`)
};

const de_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Modpack endgültig löschen?`)
};

const fr_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer définitivement ce modpack ?`)
};

const it_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminare definitivamente questo modpack?`)
};

const nl_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze modpack definitief verwijderen?`)
};

const pl_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunąć ten modpack na zawsze?`)
};

const pt_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir este modpack permanentemente?`)
};

const ru_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить этот модпак навсегда?`)
};

const sv_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radera modpaketet permanent?`)
};

const tr_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod paketi kalıcı olarak silinsin mi?`)
};

const zh_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确定永久删除此整合包？`)
};

const ja_modpacks_delete_confirm = /** @type {(inputs: Modpacks_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この Modパックを完全に削除しますか？`)
};

/**
* | output |
* | --- |
* | "Delete this modpack for good?" |
*
* @param {Modpacks_Delete_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_delete_confirm = /** @type {((inputs?: Modpacks_Delete_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Delete_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_delete_confirm(inputs)
	if (locale === "de") return de_modpacks_delete_confirm(inputs)
	if (locale === "fr") return fr_modpacks_delete_confirm(inputs)
	if (locale === "it") return it_modpacks_delete_confirm(inputs)
	if (locale === "nl") return nl_modpacks_delete_confirm(inputs)
	if (locale === "pl") return pl_modpacks_delete_confirm(inputs)
	if (locale === "pt") return pt_modpacks_delete_confirm(inputs)
	if (locale === "ru") return ru_modpacks_delete_confirm(inputs)
	if (locale === "sv") return sv_modpacks_delete_confirm(inputs)
	if (locale === "tr") return tr_modpacks_delete_confirm(inputs)
	if (locale === "zh") return zh_modpacks_delete_confirm(inputs)
	if (locale === "ja") return ja_modpacks_delete_confirm(inputs)
	return en_modpacks_delete_confirm(inputs)
});
