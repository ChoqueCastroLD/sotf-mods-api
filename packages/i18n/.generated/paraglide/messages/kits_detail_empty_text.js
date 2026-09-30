/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Detail_Empty_TextInputs */

const en_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The curator hasn’t added any mods to this kit yet.`)
};

const es_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quien creó el kit todavía no ha añadido ningún mod.`)
};

const de_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Person hinter dem Kit hat noch keine Mods hinzugefügt.`)
};

const fr_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son auteur n’a encore ajouté aucun mod à ce kit.`)
};

const it_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chi ha creato il kit non ha ancora aggiunto nessuna mod.`)
};

const nl_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De maker heeft nog geen mods aan deze kit toegevoegd.`)
};

const pl_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor nie dodał jeszcze żadnych modów do tego zestawu.`)
};

const pt_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quem criou o kit ainda não adicionou nenhum mod.`)
};

const ru_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор ещё не добавил в этот набор ни одного мода.`)
};

const sv_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den som skapade kitet har inte lagt till några moddar än.`)
};

const tr_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hazırlayan kişi bu kite henüz mod eklemedi.`)
};

const zh_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者还没有往这个套装里添加模组。`)
};

const ja_kits_detail_empty_text = /** @type {(inputs: Kits_Detail_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作成者はまだこのキットに MOD を追加していません。`)
};

/**
* | output |
* | --- |
* | "The curator hasn’t added any mods to this kit yet." |
*
* @param {Kits_Detail_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_detail_empty_text = /** @type {((inputs?: Kits_Detail_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Detail_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_detail_empty_text(inputs)
	if (locale === "de") return de_kits_detail_empty_text(inputs)
	if (locale === "fr") return fr_kits_detail_empty_text(inputs)
	if (locale === "it") return it_kits_detail_empty_text(inputs)
	if (locale === "nl") return nl_kits_detail_empty_text(inputs)
	if (locale === "pl") return pl_kits_detail_empty_text(inputs)
	if (locale === "pt") return pt_kits_detail_empty_text(inputs)
	if (locale === "ru") return ru_kits_detail_empty_text(inputs)
	if (locale === "sv") return sv_kits_detail_empty_text(inputs)
	if (locale === "tr") return tr_kits_detail_empty_text(inputs)
	if (locale === "zh") return zh_kits_detail_empty_text(inputs)
	if (locale === "ja") return ja_kits_detail_empty_text(inputs)
	return en_kits_detail_empty_text(inputs)
});
