/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Hint_Redloader_TextInputs */

const en_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The zip has a RedLoader manifest.json. Sons of the Forest + RedLoader mods are installed by RedManager and get their name and version from the manifest.`)
};

const es_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El zip tiene un manifest.json de RedLoader. Los mods de Sons of the Forest + RedLoader se instalan con RedManager y toman el nombre y la versión del manifiesto.`)
};

const de_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Zip enthält eine RedLoader-manifest.json. Mods für Sons of the Forest + RedLoader installiert RedManager, Name und Version kommen aus dem Manifest.`)
};

const fr_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le zip contient un manifest.json RedLoader. Les mods Sons of the Forest + RedLoader s’installent avec RedManager et prennent leur nom et leur version du manifeste.`)
};

const it_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo zip contiene un manifest.json di RedLoader. Le mod per Sons of the Forest + RedLoader si installano con RedManager e prendono nome e versione dal manifest.`)
};

const nl_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De zip bevat een RedLoader-manifest.json. Mods voor Sons of the Forest + RedLoader worden door RedManager geïnstalleerd en halen naam en versie uit het manifest.`)
};

const pl_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip zawiera manifest.json RedLoadera. Mody do Sons of the Forest + RedLoader instaluje RedManager, a nazwa i wersja pochodzą z manifestu.`)
};

const pt_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O zip tem um manifest.json do RedLoader. Mods de Sons of the Forest + RedLoader são instalados pelo RedManager e pegam nome e versão do manifesto.`)
};

const ru_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В zip есть manifest.json RedLoader. Моды Sons of the Forest + RedLoader устанавливаются через RedManager, имя и версия берутся из манифеста.`)
};

const sv_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip-filen har en RedLoader-manifest.json. Moddar för Sons of the Forest + RedLoader installeras av RedManager och får namn och version från manifestet.`)
};

const tr_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip içinde bir RedLoader manifest.json var. Sons of the Forest + RedLoader modlarını RedManager kurar; ad ve sürüm manifestten alınır.`)
};

const zh_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该 zip 包含 RedLoader 的 manifest.json。Sons of the Forest + RedLoader 模组由 RedManager 安装，名称和版本取自清单。`)
};

const ja_upload_hint_redloader_text = /** @type {(inputs: Upload_Hint_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip に RedLoader の manifest.json があります。Sons of the Forest + RedLoader のMODは RedManager でインストールでき、名前とバージョンはマニフェストから取得されます。`)
};

/**
* | output |
* | --- |
* | "The zip has a RedLoader manifest.json. Sons of the Forest + RedLoader mods are installed by RedManager and get their name and version from the manifest." |
*
* @param {Upload_Hint_Redloader_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_hint_redloader_text = /** @type {((inputs?: Upload_Hint_Redloader_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Hint_Redloader_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_hint_redloader_text(inputs)
	if (locale === "de") return de_upload_hint_redloader_text(inputs)
	if (locale === "fr") return fr_upload_hint_redloader_text(inputs)
	if (locale === "it") return it_upload_hint_redloader_text(inputs)
	if (locale === "nl") return nl_upload_hint_redloader_text(inputs)
	if (locale === "pl") return pl_upload_hint_redloader_text(inputs)
	if (locale === "pt") return pt_upload_hint_redloader_text(inputs)
	if (locale === "ru") return ru_upload_hint_redloader_text(inputs)
	if (locale === "sv") return sv_upload_hint_redloader_text(inputs)
	if (locale === "tr") return tr_upload_hint_redloader_text(inputs)
	if (locale === "zh") return zh_upload_hint_redloader_text(inputs)
	if (locale === "ja") return ja_upload_hint_redloader_text(inputs)
	return en_upload_hint_redloader_text(inputs)
});
