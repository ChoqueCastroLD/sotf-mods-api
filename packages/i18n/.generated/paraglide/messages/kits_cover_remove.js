/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_RemoveInputs */

const en_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use the automatic cover`)
};

const es_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar la portada automática`)
};

const de_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisches Titelbild verwenden`)
};

const fr_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utiliser la couverture automatique`)
};

const it_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa la copertina automatica`)
};

const nl_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisch omslag gebruiken`)
};

const pl_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj okładki automatycznej`)
};

const pt_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar a capa automática`)
};

const ru_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Использовать автоматическую обложку`)
};

const sv_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd automatiskt omslag`)
};

const tr_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik kapağı kullan`)
};

const zh_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用自动封面`)
};

const ja_kits_cover_remove = /** @type {(inputs: Kits_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自動カバーを使う`)
};

/**
* | output |
* | --- |
* | "Use the automatic cover" |
*
* @param {Kits_Cover_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_remove = /** @type {((inputs?: Kits_Cover_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_remove(inputs)
	if (locale === "de") return de_kits_cover_remove(inputs)
	if (locale === "fr") return fr_kits_cover_remove(inputs)
	if (locale === "it") return it_kits_cover_remove(inputs)
	if (locale === "nl") return nl_kits_cover_remove(inputs)
	if (locale === "pl") return pl_kits_cover_remove(inputs)
	if (locale === "pt") return pt_kits_cover_remove(inputs)
	if (locale === "ru") return ru_kits_cover_remove(inputs)
	if (locale === "sv") return sv_kits_cover_remove(inputs)
	if (locale === "tr") return tr_kits_cover_remove(inputs)
	if (locale === "zh") return zh_kits_cover_remove(inputs)
	if (locale === "ja") return ja_kits_cover_remove(inputs)
	return en_kits_cover_remove(inputs)
});
