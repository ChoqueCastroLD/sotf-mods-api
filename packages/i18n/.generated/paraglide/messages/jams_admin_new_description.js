/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_New_DescriptionInputs */

const en_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The jam starts as a draft with four default categories. Nothing is public until you announce it.`)
};

const es_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El jam empieza como borrador con cuatro categorías por defecto. Nada es público hasta que lo anuncies.`)
};

const de_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Jam startet als Entwurf mit vier Standardkategorien. Nichts ist öffentlich, bis du sie ankündigst.`)
};

const fr_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le jam démarre en brouillon avec quatre catégories par défaut. Rien n'est public tant que vous ne l'annoncez pas.`)
};

const it_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il jam parte come bozza con quattro categorie predefinite. Nulla è pubblico finché non lo annunci.`)
};

const nl_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De jam start als concept met vier standaardcategorieën. Niets is openbaar tot je hem aankondigt.`)
};

const pl_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam zaczyna jako szkic z czterema domyślnymi kategoriami. Nic nie jest publiczne, dopóki go nie ogłosisz.`)
};

const pt_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O jam começa como rascunho com quatro categorias padrão. Nada é público até você anunciá-lo.`)
};

const ru_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Джем создаётся как черновик с четырьмя категориями по умолчанию. Пока вы его не анонсируете, он не виден публично.`)
};

const sv_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jammen startar som utkast med fyra standardkategorier. Inget är offentligt förrän du tillkännager den.`)
};

const tr_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam, dört varsayılan kategoriyle taslak olarak başlar. Duyurana kadar hiçbir şey herkese açık olmaz.`)
};

const zh_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam 以草稿形式创建，带有四个默认类别。公布之前不会对外可见。`)
};

const ja_jams_admin_new_description = /** @type {(inputs: Jams_Admin_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムは既定の4カテゴリを持つ下書きとして作成されます。告知するまで公開されません。`)
};

/**
* | output |
* | --- |
* | "The jam starts as a draft with four default categories. Nothing is public until you announce it." |
*
* @param {Jams_Admin_New_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_new_description = /** @type {((inputs?: Jams_Admin_New_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_New_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_new_description(inputs)
	if (locale === "de") return de_jams_admin_new_description(inputs)
	if (locale === "fr") return fr_jams_admin_new_description(inputs)
	if (locale === "it") return it_jams_admin_new_description(inputs)
	if (locale === "nl") return nl_jams_admin_new_description(inputs)
	if (locale === "pl") return pl_jams_admin_new_description(inputs)
	if (locale === "pt") return pt_jams_admin_new_description(inputs)
	if (locale === "ru") return ru_jams_admin_new_description(inputs)
	if (locale === "sv") return sv_jams_admin_new_description(inputs)
	if (locale === "tr") return tr_jams_admin_new_description(inputs)
	if (locale === "zh") return zh_jams_admin_new_description(inputs)
	if (locale === "ja") return ja_jams_admin_new_description(inputs)
	return en_jams_admin_new_description(inputs)
});
