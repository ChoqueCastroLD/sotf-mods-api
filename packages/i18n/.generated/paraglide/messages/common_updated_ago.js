/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Common_Updated_AgoInputs */

const en_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Updated ${i?.when}`)
};

const es_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actualizado ${i?.when}`)
};

const de_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktualisiert ${i?.when}`)
};

const fr_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mis à jour ${i?.when}`)
};

const it_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiornata ${i?.when}`)
};

const nl_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bijgewerkt ${i?.when}`)
};

const pl_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaktualizowano ${i?.when}`)
};

const pt_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atualizado ${i?.when}`)
};

const ru_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Обновлено ${i?.when}`)
};

const sv_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uppdaterad ${i?.when}`)
};

const tr_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Güncellendi: ${i?.when}`)
};

const zh_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更新于 ${i?.when}`)
};

const ja_common_updated_ago = /** @type {(inputs: Common_Updated_AgoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when}に更新`)
};

/**
* | output |
* | --- |
* | "Updated {when}" |
*
* @param {Common_Updated_AgoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_updated_ago = /** @type {((inputs: Common_Updated_AgoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Updated_AgoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_updated_ago(inputs)
	if (locale === "de") return de_common_updated_ago(inputs)
	if (locale === "fr") return fr_common_updated_ago(inputs)
	if (locale === "it") return it_common_updated_ago(inputs)
	if (locale === "nl") return nl_common_updated_ago(inputs)
	if (locale === "pl") return pl_common_updated_ago(inputs)
	if (locale === "pt") return pt_common_updated_ago(inputs)
	if (locale === "ru") return ru_common_updated_ago(inputs)
	if (locale === "sv") return sv_common_updated_ago(inputs)
	if (locale === "tr") return tr_common_updated_ago(inputs)
	if (locale === "zh") return zh_common_updated_ago(inputs)
	if (locale === "ja") return ja_common_updated_ago(inputs)
	return en_common_updated_ago(inputs)
});
