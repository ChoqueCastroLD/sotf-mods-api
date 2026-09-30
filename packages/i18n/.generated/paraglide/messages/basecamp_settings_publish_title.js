/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Settings_Publish_TitleInputs */

const en_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publish ${i?.name} again?`)
};

const es_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Volver a publicar ${i?.name}?`)
};

const de_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} wieder veröffentlichen?`)
};

const fr_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Republier ${i?.name} ?`)
};

const it_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pubblicare di nuovo ${i?.name}?`)
};

const nl_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} opnieuw publiceren?`)
};

const pl_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Opublikować ${i?.name} ponownie?`)
};

const pt_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publicar ${i?.name} de novo?`)
};

const ru_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Снова опубликовать ${i?.name}?`)
};

const sv_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publicera ${i?.name} igen?`)
};

const tr_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} yeniden yayınlansın mı?`)
};

const zh_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`重新发布 ${i?.name}？`)
};

const ja_basecamp_settings_publish_title = /** @type {(inputs: Basecamp_Settings_Publish_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を再公開しますか？`)
};

/**
* | output |
* | --- |
* | "Publish {name} again?" |
*
* @param {Basecamp_Settings_Publish_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_publish_title = /** @type {((inputs: Basecamp_Settings_Publish_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Publish_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_publish_title(inputs)
	if (locale === "de") return de_basecamp_settings_publish_title(inputs)
	if (locale === "fr") return fr_basecamp_settings_publish_title(inputs)
	if (locale === "it") return it_basecamp_settings_publish_title(inputs)
	if (locale === "nl") return nl_basecamp_settings_publish_title(inputs)
	if (locale === "pl") return pl_basecamp_settings_publish_title(inputs)
	if (locale === "pt") return pt_basecamp_settings_publish_title(inputs)
	if (locale === "ru") return ru_basecamp_settings_publish_title(inputs)
	if (locale === "sv") return sv_basecamp_settings_publish_title(inputs)
	if (locale === "tr") return tr_basecamp_settings_publish_title(inputs)
	if (locale === "zh") return zh_basecamp_settings_publish_title(inputs)
	if (locale === "ja") return ja_basecamp_settings_publish_title(inputs)
	return en_basecamp_settings_publish_title(inputs)
});
