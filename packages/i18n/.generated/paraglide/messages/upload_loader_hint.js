/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Loader_HintInputs */

const en_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The oldest RedLoader version your mod works with.`)
};

const es_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versión más antigua de RedLoader con la que funciona tu mod.`)
};

const de_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die älteste RedLoader-Version, mit der dein Mod funktioniert.`)
};

const fr_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La plus ancienne version de RedLoader avec laquelle votre mod fonctionne.`)
};

const it_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versione più vecchia di RedLoader con cui funziona la tua mod.`)
};

const nl_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De oudste RedLoader-versie waarmee je mod werkt.`)
};

const pl_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najstarsza wersja RedLoadera, z którą działa twój mod.`)
};

const pt_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A versão mais antiga do RedLoader com que seu mod funciona.`)
};

const ru_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Самая старая версия RedLoader, с которой работает ваш мод.`)
};

const sv_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den äldsta RedLoader-versionen som din mod fungerar med.`)
};

const tr_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modunun çalıştığı en eski RedLoader sürümü.`)
};

const zh_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组能运行的最旧 RedLoader 版本。`)
};

const ja_upload_loader_hint = /** @type {(inputs: Upload_Loader_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODが動く最も古いRedLoaderのバージョン。`)
};

/**
* | output |
* | --- |
* | "The oldest RedLoader version your mod works with." |
*
* @param {Upload_Loader_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_loader_hint = /** @type {((inputs?: Upload_Loader_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Loader_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_loader_hint(inputs)
	if (locale === "de") return de_upload_loader_hint(inputs)
	if (locale === "fr") return fr_upload_loader_hint(inputs)
	if (locale === "it") return it_upload_loader_hint(inputs)
	if (locale === "nl") return nl_upload_loader_hint(inputs)
	if (locale === "pl") return pl_upload_loader_hint(inputs)
	if (locale === "pt") return pt_upload_loader_hint(inputs)
	if (locale === "ru") return ru_upload_loader_hint(inputs)
	if (locale === "sv") return sv_upload_loader_hint(inputs)
	if (locale === "tr") return tr_upload_loader_hint(inputs)
	if (locale === "zh") return zh_upload_loader_hint(inputs)
	if (locale === "ja") return ja_upload_loader_hint(inputs)
	return en_upload_loader_hint(inputs)
});
