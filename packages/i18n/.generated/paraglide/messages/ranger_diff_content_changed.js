/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Diff_Content_ChangedInputs */

const en_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`contents changed`)
};

const es_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`contenido cambiado`)
};

const de_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalt geändert`)
};

const fr_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`contenu modifié`)
};

const it_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`contenuto modificato`)
};

const nl_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`inhoud gewijzigd`)
};

const pl_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zmieniona zawartość`)
};

const pt_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`conteúdo alterado`)
};

const ru_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`содержимое изменилось`)
};

const sv_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`innehållet ändrat`)
};

const tr_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`içerik değişti`)
};

const zh_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容已更改`)
};

const ja_ranger_diff_content_changed = /** @type {(inputs: Ranger_Diff_Content_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容が変更されました`)
};

/**
* | output |
* | --- |
* | "contents changed" |
*
* @param {Ranger_Diff_Content_ChangedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_diff_content_changed = /** @type {((inputs?: Ranger_Diff_Content_ChangedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Diff_Content_ChangedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_diff_content_changed(inputs)
	if (locale === "de") return de_ranger_diff_content_changed(inputs)
	if (locale === "fr") return fr_ranger_diff_content_changed(inputs)
	if (locale === "it") return it_ranger_diff_content_changed(inputs)
	if (locale === "nl") return nl_ranger_diff_content_changed(inputs)
	if (locale === "pl") return pl_ranger_diff_content_changed(inputs)
	if (locale === "pt") return pt_ranger_diff_content_changed(inputs)
	if (locale === "ru") return ru_ranger_diff_content_changed(inputs)
	if (locale === "sv") return sv_ranger_diff_content_changed(inputs)
	if (locale === "tr") return tr_ranger_diff_content_changed(inputs)
	if (locale === "zh") return zh_ranger_diff_content_changed(inputs)
	if (locale === "ja") return ja_ranger_diff_content_changed(inputs)
	return en_ranger_diff_content_changed(inputs)
});
