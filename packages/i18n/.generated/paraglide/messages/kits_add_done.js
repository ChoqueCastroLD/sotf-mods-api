/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, kit: NonNullable<unknown> }} Kits_Add_DoneInputs */

const en_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} added to “${i?.kit}”.`)
};

const es_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} añadido a «${i?.kit}».`)
};

const de_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} zu „${i?.kit}“ hinzugefügt.`)
};

const fr_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ajouté à « ${i?.kit} ».`)
};

const it_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} aggiunta a «${i?.kit}».`)
};

const nl_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} toegevoegd aan ‘${i?.kit}’.`)
};

const pl_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodano ${i?.name} do „${i?.kit}”.`)
};

const pt_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} adicionado a “${i?.kit}”.`)
};

const ru_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} добавлен в «${i?.kit}».`)
};

const sv_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} har lagts till i ”${i?.kit}”.`)
};

const tr_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, “${i?.kit}” kitine eklendi.`)
};

const zh_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已将 ${i?.name} 添加到“${i?.kit}”。`)
};

const ja_kits_add_done = /** @type {(inputs: Kits_Add_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を「${i?.kit}」に追加しました。`)
};

/**
* | output |
* | --- |
* | "{name} added to “{kit}”." |
*
* @param {Kits_Add_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_add_done = /** @type {((inputs: Kits_Add_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Add_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_add_done(inputs)
	if (locale === "de") return de_kits_add_done(inputs)
	if (locale === "fr") return fr_kits_add_done(inputs)
	if (locale === "it") return it_kits_add_done(inputs)
	if (locale === "nl") return nl_kits_add_done(inputs)
	if (locale === "pl") return pl_kits_add_done(inputs)
	if (locale === "pt") return pt_kits_add_done(inputs)
	if (locale === "ru") return ru_kits_add_done(inputs)
	if (locale === "sv") return sv_kits_add_done(inputs)
	if (locale === "tr") return tr_kits_add_done(inputs)
	if (locale === "zh") return zh_kits_add_done(inputs)
	if (locale === "ja") return ja_kits_add_done(inputs)
	return en_kits_add_done(inputs)
});
