/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Settings_Link_RemoveInputs */

const en_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("en", i?.n, {});return /** @type {LocalizedString} */ (`Remove link ${n__number}`)
};

const es_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("es", i?.n, {});return /** @type {LocalizedString} */ (`Quitar el enlace ${n__number}`)
};

const de_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("de", i?.n, {});return /** @type {LocalizedString} */ (`Link ${n__number} entfernen`)
};

const fr_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("fr", i?.n, {});return /** @type {LocalizedString} */ (`Retirer le lien ${n__number}`)
};

const it_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("it", i?.n, {});return /** @type {LocalizedString} */ (`Rimuovi il link ${n__number}`)
};

const nl_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("nl", i?.n, {});return /** @type {LocalizedString} */ (`Link ${n__number} verwijderen`)
};

const pl_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("pl", i?.n, {});return /** @type {LocalizedString} */ (`Usuń link ${n__number}`)
};

const pt_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("pt", i?.n, {});return /** @type {LocalizedString} */ (`Remover o link ${n__number}`)
};

const ru_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("ru", i?.n, {});return /** @type {LocalizedString} */ (`Удалить ссылку ${n__number}`)
};

const sv_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("sv", i?.n, {});return /** @type {LocalizedString} */ (`Ta bort länk ${n__number}`)
};

const tr_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("tr", i?.n, {});return /** @type {LocalizedString} */ (`${n__number}. bağlantıyı kaldır`)
};

const zh_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("zh", i?.n, {});return /** @type {LocalizedString} */ (`移除第 ${n__number} 个链接`)
};

const ja_settings_link_remove = /** @type {(inputs: Settings_Link_RemoveInputs) => LocalizedString} */ (i) => {
	const n__number = registry.number("ja", i?.n, {});return /** @type {LocalizedString} */ (`リンク ${n__number} を削除`)
};

/**
* | output |
* | --- |
* | "Remove link {n__number}" |
*
* @param {Settings_Link_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_link_remove = /** @type {((inputs: Settings_Link_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Link_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_link_remove(inputs)
	if (locale === "de") return de_settings_link_remove(inputs)
	if (locale === "fr") return fr_settings_link_remove(inputs)
	if (locale === "it") return it_settings_link_remove(inputs)
	if (locale === "nl") return nl_settings_link_remove(inputs)
	if (locale === "pl") return pl_settings_link_remove(inputs)
	if (locale === "pt") return pt_settings_link_remove(inputs)
	if (locale === "ru") return ru_settings_link_remove(inputs)
	if (locale === "sv") return sv_settings_link_remove(inputs)
	if (locale === "tr") return tr_settings_link_remove(inputs)
	if (locale === "zh") return zh_settings_link_remove(inputs)
	if (locale === "ja") return ja_settings_link_remove(inputs)
	return en_settings_link_remove(inputs)
});
