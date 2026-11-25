/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Can_EditInputs */

const en_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit your mod pages: description, tags, images, links`)
};

const es_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar las páginas de tus mods: descripción, etiquetas, imágenes, enlaces`)
};

const de_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Mod-Seiten bearbeiten: Beschreibung, Tags, Bilder, Links`)
};

const fr_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier les pages de vos mods : description, tags, images, liens`)
};

const it_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modificare le pagine delle tue mod: descrizione, tag, immagini, link`)
};

const nl_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je modpagina’s bewerken: beschrijving, tags, afbeeldingen, links`)
};

const pl_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytować strony modów: opis, tagi, obrazy, linki`)
};

const pt_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar as páginas dos seus mods: descrição, tags, imagens, links`)
};

const ru_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Редактировать страницы модов: описание, теги, изображения, ссылки`)
};

const sv_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera dina moddsidor: beskrivning, taggar, bilder, länkar`)
};

const tr_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod sayfalarını düzenle: açıklama, etiketler, görseller, bağlantılar`)
};

const zh_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑模组页面：简介、标签、图片、链接`)
};

const ja_api_can_edit = /** @type {(inputs: Api_Can_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ページを編集：説明、タグ、画像、リンク`)
};

/**
* | output |
* | --- |
* | "Edit your mod pages: description, tags, images, links" |
*
* @param {Api_Can_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_can_edit = /** @type {((inputs?: Api_Can_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Can_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_can_edit(inputs)
	if (locale === "de") return de_api_can_edit(inputs)
	if (locale === "fr") return fr_api_can_edit(inputs)
	if (locale === "it") return it_api_can_edit(inputs)
	if (locale === "nl") return nl_api_can_edit(inputs)
	if (locale === "pl") return pl_api_can_edit(inputs)
	if (locale === "pt") return pt_api_can_edit(inputs)
	if (locale === "ru") return ru_api_can_edit(inputs)
	if (locale === "sv") return sv_api_can_edit(inputs)
	if (locale === "tr") return tr_api_can_edit(inputs)
	if (locale === "zh") return zh_api_can_edit(inputs)
	if (locale === "ja") return ja_api_can_edit(inputs)
	return en_api_can_edit(inputs)
});
