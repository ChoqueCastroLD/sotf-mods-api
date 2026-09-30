/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Content_Updated_OnInputs */

const en_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Last updated ${i?.date}`)
};

const es_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Última actualización: ${i?.date}`)
};

const de_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zuletzt aktualisiert: ${i?.date}`)
};

const fr_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dernière mise à jour : ${i?.date}`)
};

const it_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ultimo aggiornamento: ${i?.date}`)
};

const nl_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Laatst bijgewerkt: ${i?.date}`)
};

const pl_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ostatnia aktualizacja: ${i?.date}`)
};

const pt_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Última atualização: ${i?.date}`)
};

const ru_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Обновлено: ${i?.date}`)
};

const sv_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Senast uppdaterad: ${i?.date}`)
};

const tr_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Son güncelleme: ${i?.date}`)
};

const zh_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最后更新：${i?.date}`)
};

const ja_content_updated_on = /** @type {(inputs: Content_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最終更新：${i?.date}`)
};

/**
* | output |
* | --- |
* | "Last updated {date}" |
*
* @param {Content_Updated_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_updated_on = /** @type {((inputs: Content_Updated_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Updated_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_updated_on(inputs)
	if (locale === "de") return de_content_updated_on(inputs)
	if (locale === "fr") return fr_content_updated_on(inputs)
	if (locale === "it") return it_content_updated_on(inputs)
	if (locale === "nl") return nl_content_updated_on(inputs)
	if (locale === "pl") return pl_content_updated_on(inputs)
	if (locale === "pt") return pt_content_updated_on(inputs)
	if (locale === "ru") return ru_content_updated_on(inputs)
	if (locale === "sv") return sv_content_updated_on(inputs)
	if (locale === "tr") return tr_content_updated_on(inputs)
	if (locale === "zh") return zh_content_updated_on(inputs)
	if (locale === "ja") return ja_content_updated_on(inputs)
	return en_content_updated_on(inputs)
});
