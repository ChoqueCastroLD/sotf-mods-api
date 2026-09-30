/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_HintInputs */

const en_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator status, support links, default license and reply templates.`)
};

const es_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado de creador, enlaces de apoyo, licencia por defecto y plantillas de respuesta.`)
};

const de_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator-Status, Unterstützer-Links, Standardlizenz und Antwortvorlagen.`)
};

const fr_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statut de créateur, liens de soutien, licence par défaut et modèles de réponse.`)
};

const it_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato di creatore, link di supporto, licenza predefinita e modelli di risposta.`)
};

const nl_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makersstatus, steunlinks, standaardlicentie en antwoordsjablonen.`)
};

const pl_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status twórcy, linki wsparcia, domyślna licencja i szablony odpowiedzi.`)
};

const pt_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status de criador, links de apoio, licença padrão e modelos de resposta.`)
};

const ru_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус автора, ссылки поддержки, лицензия по умолчанию и шаблоны ответов.`)
};

const sv_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparstatus, stödlänkar, standardlicens och svarsmallar.`)
};

const tr_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı durumu, destek bağlantıları, varsayılan lisans ve yanıt şablonları.`)
};

const zh_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者状态、赞助链接、默认许可和回复模板。`)
};

const ja_settings_creator_hint = /** @type {(inputs: Settings_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターの状態、支援リンク、既定のライセンス、返信テンプレート。`)
};

/**
* | output |
* | --- |
* | "Creator status, support links, default license and reply templates." |
*
* @param {Settings_Creator_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_hint = /** @type {((inputs?: Settings_Creator_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_hint(inputs)
	if (locale === "de") return de_settings_creator_hint(inputs)
	if (locale === "fr") return fr_settings_creator_hint(inputs)
	if (locale === "it") return it_settings_creator_hint(inputs)
	if (locale === "nl") return nl_settings_creator_hint(inputs)
	if (locale === "pl") return pl_settings_creator_hint(inputs)
	if (locale === "pt") return pt_settings_creator_hint(inputs)
	if (locale === "ru") return ru_settings_creator_hint(inputs)
	if (locale === "sv") return sv_settings_creator_hint(inputs)
	if (locale === "tr") return tr_settings_creator_hint(inputs)
	if (locale === "zh") return zh_settings_creator_hint(inputs)
	if (locale === "ja") return ja_settings_creator_hint(inputs)
	return en_settings_creator_hint(inputs)
});
