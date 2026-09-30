/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Scope_Mods_Write_HintInputs */

const en_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create and edit your mods, versions, kits and uploads.`)
};

const es_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear y editar tus mods, versiones, kits y subidas.`)
};

const de_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Mods, Versionen, Kits und Uploads erstellen und bearbeiten.`)
};

const fr_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer et modifier vos mods, versions, kits et envois.`)
};

const it_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creare e modificare le tue mod, versioni, kit e caricamenti.`)
};

const nl_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je mods, versies, kits en uploads maken en bewerken.`)
};

const pl_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tworzenie i edycja modów, wersji, zestawów i przesyłanych plików.`)
};

const pt_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar e editar seus mods, versões, kits e envios.`)
};

const ru_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создание и изменение ваших модов, версий, наборов и загрузок.`)
};

const sv_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa och redigera dina mods, versioner, kit och uppladdningar.`)
};

const tr_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarını, sürümlerini, kitlerini ve yüklemelerini oluştur ve düzenle.`)
};

const zh_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建和编辑你的模组、版本、套件和上传。`)
};

const ja_tokens_scope_mods_write_hint = /** @type {(inputs: Tokens_Scope_Mods_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分の Mod、バージョン、キット、アップロードの作成と編集。`)
};

/**
* | output |
* | --- |
* | "Create and edit your mods, versions, kits and uploads." |
*
* @param {Tokens_Scope_Mods_Write_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_scope_mods_write_hint = /** @type {((inputs?: Tokens_Scope_Mods_Write_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Scope_Mods_Write_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_scope_mods_write_hint(inputs)
	if (locale === "de") return de_tokens_scope_mods_write_hint(inputs)
	if (locale === "fr") return fr_tokens_scope_mods_write_hint(inputs)
	if (locale === "it") return it_tokens_scope_mods_write_hint(inputs)
	if (locale === "nl") return nl_tokens_scope_mods_write_hint(inputs)
	if (locale === "pl") return pl_tokens_scope_mods_write_hint(inputs)
	if (locale === "pt") return pt_tokens_scope_mods_write_hint(inputs)
	if (locale === "ru") return ru_tokens_scope_mods_write_hint(inputs)
	if (locale === "sv") return sv_tokens_scope_mods_write_hint(inputs)
	if (locale === "tr") return tr_tokens_scope_mods_write_hint(inputs)
	if (locale === "zh") return zh_tokens_scope_mods_write_hint(inputs)
	if (locale === "ja") return ja_tokens_scope_mods_write_hint(inputs)
	return en_tokens_scope_mods_write_hint(inputs)
});
