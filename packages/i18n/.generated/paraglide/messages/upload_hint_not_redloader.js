/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Hint_Not_RedloaderInputs */

const en_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This file has no RedLoader manifest. If the mod is for another loader or for The Forest, pick it above and the same file is checked again.`)
};

const es_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este archivo no tiene manifiesto de RedLoader. Si el mod es para otro cargador o para The Forest, elígelo arriba y se volverá a revisar el mismo archivo.`)
};

const de_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Datei hat kein RedLoader-Manifest. Ist die Mod für einen anderen Loader oder für The Forest, wähle das oben aus; dieselbe Datei wird erneut geprüft.`)
};

const fr_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce fichier n’a pas de manifeste RedLoader. Si le mod est pour un autre chargeur ou pour The Forest, choisissez-le plus haut et le même fichier sera vérifié à nouveau.`)
};

const it_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo file non ha un manifest di RedLoader. Se la mod è per un altro loader o per The Forest, sceglilo sopra e lo stesso file verrà ricontrollato.`)
};

const nl_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit bestand heeft geen RedLoader-manifest. Is de mod voor een andere loader of voor The Forest, kies dat hierboven; hetzelfde bestand wordt opnieuw gecontroleerd.`)
};

const pl_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten plik nie ma manifestu RedLoadera. Jeśli mod jest do innego loadera albo do The Forest, wybierz to wyżej, a ten sam plik zostanie sprawdzony ponownie.`)
};

const pt_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este arquivo não tem manifesto do RedLoader. Se o mod for para outro carregador ou para The Forest, escolha acima e o mesmo arquivo será verificado de novo.`)
};

const ru_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В этом файле нет манифеста RedLoader. Если мод для другого загрузчика или для The Forest, выберите это выше, и тот же файл проверится заново.`)
};

const sv_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen har inget RedLoader-manifest. Är modden för en annan laddare eller för The Forest, välj det ovan så kontrolleras samma fil igen.`)
};

const tr_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dosyada RedLoader manifesti yok. Mod başka bir yükleyici ya da The Forest içinse yukarıdan seç; aynı dosya yeniden kontrol edilir.`)
};

const zh_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该文件没有 RedLoader 清单。如果这个模组适用于其他加载器或 The Forest，请在上方选择，同一个文件会重新检查。`)
};

const ja_upload_hint_not_redloader = /** @type {(inputs: Upload_Hint_Not_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このファイルには RedLoader のマニフェストがありません。別のローダー用や The Forest 用なら上で選び直してください。同じファイルをもう一度チェックします。`)
};

/**
* | output |
* | --- |
* | "This file has no RedLoader manifest. If the mod is for another loader or for The Forest, pick it above and the same file is checked again." |
*
* @param {Upload_Hint_Not_RedloaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_hint_not_redloader = /** @type {((inputs?: Upload_Hint_Not_RedloaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Hint_Not_RedloaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_hint_not_redloader(inputs)
	if (locale === "de") return de_upload_hint_not_redloader(inputs)
	if (locale === "fr") return fr_upload_hint_not_redloader(inputs)
	if (locale === "it") return it_upload_hint_not_redloader(inputs)
	if (locale === "nl") return nl_upload_hint_not_redloader(inputs)
	if (locale === "pl") return pl_upload_hint_not_redloader(inputs)
	if (locale === "pt") return pt_upload_hint_not_redloader(inputs)
	if (locale === "ru") return ru_upload_hint_not_redloader(inputs)
	if (locale === "sv") return sv_upload_hint_not_redloader(inputs)
	if (locale === "tr") return tr_upload_hint_not_redloader(inputs)
	if (locale === "zh") return zh_upload_hint_not_redloader(inputs)
	if (locale === "ja") return ja_upload_hint_not_redloader(inputs)
	return en_upload_hint_not_redloader(inputs)
});
