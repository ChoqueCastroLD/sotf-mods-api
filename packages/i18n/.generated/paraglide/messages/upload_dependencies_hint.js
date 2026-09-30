/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependencies_HintInputs */

const en_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Those in manifest.json are always required. Add optional mods and conflicts here.`)
};

const es_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las de manifest.json siempre son obligatorias. Añade aquí mods opcionales y conflictos.`)
};

const de_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die aus manifest.json sind immer erforderlich. Füge hier optionale Mods und Konflikte hinzu.`)
};

const fr_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Celles de manifest.json sont toujours requises. Ajoutez ici les mods facultatifs et les conflits.`)
};

const it_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelle di manifest.json sono sempre obbligatorie. Aggiungi qui mod facoltative e conflitti.`)
};

const nl_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die uit manifest.json zijn altijd vereist. Voeg hier optionele mods en conflicten toe.`)
};

const pl_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te z manifest.json są zawsze wymagane. Tutaj dodaj mody opcjonalne i konflikty.`)
};

const pt_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As do manifest.json são sempre obrigatórias. Adicione aqui mods opcionais e conflitos.`)
};

const ru_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимости из manifest.json всегда обязательны. Здесь добавьте необязательные моды и конфликты.`)
};

const sv_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De i manifest.json krävs alltid. Lägg till valfria moddar och konflikter här.`)
};

const tr_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json içindekiler her zaman gereklidir. İsteğe bağlı modları ve çakışmaları buraya ekle.`)
};

const zh_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json 中的依赖始终为必需。在这里添加可选模组和冲突。`)
};

const ja_upload_dependencies_hint = /** @type {(inputs: Upload_Dependencies_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json の依存関係は常に必須です。任意のMODと競合はここで追加します。`)
};

/**
* | output |
* | --- |
* | "Those in manifest.json are always required. Add optional mods and conflicts here." |
*
* @param {Upload_Dependencies_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependencies_hint = /** @type {((inputs?: Upload_Dependencies_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependencies_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependencies_hint(inputs)
	if (locale === "de") return de_upload_dependencies_hint(inputs)
	if (locale === "fr") return fr_upload_dependencies_hint(inputs)
	if (locale === "it") return it_upload_dependencies_hint(inputs)
	if (locale === "nl") return nl_upload_dependencies_hint(inputs)
	if (locale === "pl") return pl_upload_dependencies_hint(inputs)
	if (locale === "pt") return pt_upload_dependencies_hint(inputs)
	if (locale === "ru") return ru_upload_dependencies_hint(inputs)
	if (locale === "sv") return sv_upload_dependencies_hint(inputs)
	if (locale === "tr") return tr_upload_dependencies_hint(inputs)
	if (locale === "zh") return zh_upload_dependencies_hint(inputs)
	if (locale === "ja") return ja_upload_dependencies_hint(inputs)
	return en_upload_dependencies_hint(inputs)
});
