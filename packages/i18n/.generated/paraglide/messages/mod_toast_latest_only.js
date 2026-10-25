/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Toast_Latest_OnlyInputs */

const en_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Only the latest version of ${i?.name} can be downloaded. The creator turned off older versions.`)
};

const es_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Solo se puede descargar la última versión de ${i?.name}. El creador desactivó las versiones anteriores.`)
};

const de_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Von ${i?.name} kann nur die neueste Version heruntergeladen werden. Der Ersteller hat ältere Versionen deaktiviert.`)
};

const fr_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seule la dernière version de ${i?.name} peut être téléchargée. Le créateur a désactivé les versions précédentes.`)
};

const it_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Di ${i?.name} si può scaricare solo l'ultima versione. Il creatore ha disattivato le versioni precedenti.`)
};

const nl_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Van ${i?.name} kan alleen de nieuwste versie worden gedownload. De maker heeft oudere versies uitgeschakeld.`)
};

const pl_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Z ${i?.name} można pobrać tylko najnowszą wersję. Twórca wyłączył starsze wersje.`)
};

const pt_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Só é possível baixar a versão mais recente de ${i?.name}. O criador desativou as versões anteriores.`)
};

const ru_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`У ${i?.name} можно скачать только последнюю версию. Автор отключил старые версии.`)
};

const sv_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bara den senaste versionen av ${i?.name} kan laddas ner. Skaparen har stängt av äldre versioner.`)
};

const tr_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için yalnızca en son sürüm indirilebilir. Yapımcı eski sürümleri kapattı.`)
};

const zh_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 只能下载最新版本。作者已关闭旧版本的下载。`)
};

const ja_mod_toast_latest_only = /** @type {(inputs: Mod_Toast_Latest_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} は最新バージョンのみダウンロードできます。作者が古いバージョンを無効にしています。`)
};

/**
* | output |
* | --- |
* | "Only the latest version of {name} can be downloaded. The creator turned off older versions." |
*
* @param {Mod_Toast_Latest_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_toast_latest_only = /** @type {((inputs: Mod_Toast_Latest_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_Latest_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_toast_latest_only(inputs)
	if (locale === "de") return de_mod_toast_latest_only(inputs)
	if (locale === "fr") return fr_mod_toast_latest_only(inputs)
	if (locale === "it") return it_mod_toast_latest_only(inputs)
	if (locale === "nl") return nl_mod_toast_latest_only(inputs)
	if (locale === "pl") return pl_mod_toast_latest_only(inputs)
	if (locale === "pt") return pt_mod_toast_latest_only(inputs)
	if (locale === "ru") return ru_mod_toast_latest_only(inputs)
	if (locale === "sv") return sv_mod_toast_latest_only(inputs)
	if (locale === "tr") return tr_mod_toast_latest_only(inputs)
	if (locale === "zh") return zh_mod_toast_latest_only(inputs)
	if (locale === "ja") return ja_mod_toast_latest_only(inputs)
	return en_mod_toast_latest_only(inputs)
});
