/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Auto_PublishInputs */

const en_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish results automatically`)
};

const es_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar resultados automáticamente`)
};

const de_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergebnisse automatisch veröffentlichen`)
};

const fr_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier les résultats automatiquement`)
};

const it_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica i risultati automaticamente`)
};

const nl_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten automatisch publiceren`)
};

const pl_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publikuj wyniki automatycznie`)
};

const pt_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar resultados automaticamente`)
};

const ru_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Публиковать результаты автоматически`)
};

const sv_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera resultat automatiskt`)
};

const tr_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçları otomatik yayımla`)
};

const zh_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动发布结果`)
};

const ja_jams_editor_auto_publish = /** @type {(inputs: Jams_Editor_Auto_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果を自動で公開`)
};

/**
* | output |
* | --- |
* | "Publish results automatically" |
*
* @param {Jams_Editor_Auto_PublishInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_auto_publish = /** @type {((inputs?: Jams_Editor_Auto_PublishInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Auto_PublishInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_auto_publish(inputs)
	if (locale === "de") return de_jams_editor_auto_publish(inputs)
	if (locale === "fr") return fr_jams_editor_auto_publish(inputs)
	if (locale === "it") return it_jams_editor_auto_publish(inputs)
	if (locale === "nl") return nl_jams_editor_auto_publish(inputs)
	if (locale === "pl") return pl_jams_editor_auto_publish(inputs)
	if (locale === "pt") return pt_jams_editor_auto_publish(inputs)
	if (locale === "ru") return ru_jams_editor_auto_publish(inputs)
	if (locale === "sv") return sv_jams_editor_auto_publish(inputs)
	if (locale === "tr") return tr_jams_editor_auto_publish(inputs)
	if (locale === "zh") return zh_jams_editor_auto_publish(inputs)
	if (locale === "ja") return ja_jams_editor_auto_publish(inputs)
	return en_jams_editor_auto_publish(inputs)
});
