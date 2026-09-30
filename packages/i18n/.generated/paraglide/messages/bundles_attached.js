/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_AttachedInputs */

const en_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bundle created. The zip is being built.`)
};

const es_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paquete creado. El zip se está generando.`)
};

const de_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paket erstellt. Die Zip-Datei wird erstellt.`)
};

const fr_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pack créé. Le zip est en cours de création.`)
};

const it_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pacchetto creato. Lo zip è in preparazione.`)
};

const nl_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pakket gemaakt. De zip wordt opgebouwd.`)
};

const pl_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pakiet utworzony. Zip jest budowany.`)
};

const pt_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pacote criado. O zip está a ser gerado.`)
};

const ru_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Набор создан. Zip собирается.`)
};

const sv_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paketet är skapat. Zip-filen byggs.`)
};

const tr_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paket oluşturuldu. Zip hazırlanıyor.`)
};

const zh_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包已创建，正在生成 zip。`)
};

const ja_bundles_attached = /** @type {(inputs: Bundles_AttachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バンドルを作成しました。zip を生成中です。`)
};

/**
* | output |
* | --- |
* | "Bundle created. The zip is being built." |
*
* @param {Bundles_AttachedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_attached = /** @type {((inputs?: Bundles_AttachedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_AttachedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_attached(inputs)
	if (locale === "de") return de_bundles_attached(inputs)
	if (locale === "fr") return fr_bundles_attached(inputs)
	if (locale === "it") return it_bundles_attached(inputs)
	if (locale === "nl") return nl_bundles_attached(inputs)
	if (locale === "pl") return pl_bundles_attached(inputs)
	if (locale === "pt") return pt_bundles_attached(inputs)
	if (locale === "ru") return ru_bundles_attached(inputs)
	if (locale === "sv") return sv_bundles_attached(inputs)
	if (locale === "tr") return tr_bundles_attached(inputs)
	if (locale === "zh") return zh_bundles_attached(inputs)
	if (locale === "ja") return ja_bundles_attached(inputs)
	return en_bundles_attached(inputs)
});
