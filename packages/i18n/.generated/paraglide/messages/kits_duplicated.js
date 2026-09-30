/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_DuplicatedInputs */

const en_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Copy “${i?.name}” created`)
};

const es_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Copia «${i?.name}» creada`)
};

const de_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kopie „${i?.name}“ erstellt`)
};

const fr_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Copie « ${i?.name} » créée`)
};

const it_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Copia «${i?.name}» creata`)
};

const nl_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kopie ‘${i?.name}’ gemaakt`)
};

const pl_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Utworzono kopię „${i?.name}”`)
};

const pt_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cópia “${i?.name}” criada`)
};

const ru_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Создана копия «${i?.name}»`)
};

const sv_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kopian ”${i?.name}” har skapats`)
};

const tr_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” kopyası oluşturuldu`)
};

const zh_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已创建副本“${i?.name}”`)
};

const ja_kits_duplicated = /** @type {(inputs: Kits_DuplicatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`コピー「${i?.name}」を作成しました`)
};

/**
* | output |
* | --- |
* | "Copy “{name}” created" |
*
* @param {Kits_DuplicatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_duplicated = /** @type {((inputs: Kits_DuplicatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_DuplicatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_duplicated(inputs)
	if (locale === "de") return de_kits_duplicated(inputs)
	if (locale === "fr") return fr_kits_duplicated(inputs)
	if (locale === "it") return it_kits_duplicated(inputs)
	if (locale === "nl") return nl_kits_duplicated(inputs)
	if (locale === "pl") return pl_kits_duplicated(inputs)
	if (locale === "pt") return pt_kits_duplicated(inputs)
	if (locale === "ru") return ru_kits_duplicated(inputs)
	if (locale === "sv") return sv_kits_duplicated(inputs)
	if (locale === "tr") return tr_kits_duplicated(inputs)
	if (locale === "zh") return zh_kits_duplicated(inputs)
	if (locale === "ja") return ja_kits_duplicated(inputs)
	return en_kits_duplicated(inputs)
});
