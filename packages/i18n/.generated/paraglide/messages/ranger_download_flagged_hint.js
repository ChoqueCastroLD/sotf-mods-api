/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Download_Flagged_HintInputs */

const en_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flagged file: open it only in a sandbox or a virtual machine.`)
};

const es_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo marcado: ábrelo solo en un sandbox o una máquina virtual.`)
};

const de_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markierte Datei: Öffne sie nur in einer Sandbox oder einer virtuellen Maschine.`)
};

const fr_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier signalé : ouvrez-le uniquement dans un bac à sable ou une machine virtuelle.`)
};

const it_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File segnalato: aprilo solo in una sandbox o in una macchina virtuale.`)
};

const nl_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemarkeerd bestand: open het alleen in een sandbox of virtuele machine.`)
};

const pl_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznaczony plik: otwieraj go tylko w piaskownicy lub maszynie wirtualnej.`)
};

const pt_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo sinalizado: abra só em uma sandbox ou máquina virtual.`)
};

const ru_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Помеченный файл: открывайте его только в песочнице или виртуальной машине.`)
};

const sv_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flaggad fil: öppna den bara i en sandlåda eller virtuell maskin.`)
};

const tr_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İşaretli dosya: yalnızca bir sanal alanda veya sanal makinede aç.`)
};

const zh_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已标记的文件：只能在沙盒或虚拟机中打开。`)
};

const ja_ranger_download_flagged_hint = /** @type {(inputs: Ranger_Download_Flagged_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フラグ付きのファイル：サンドボックスか仮想マシンでのみ開いてください。`)
};

/**
* | output |
* | --- |
* | "Flagged file: open it only in a sandbox or a virtual machine." |
*
* @param {Ranger_Download_Flagged_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_download_flagged_hint = /** @type {((inputs?: Ranger_Download_Flagged_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Download_Flagged_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_download_flagged_hint(inputs)
	if (locale === "de") return de_ranger_download_flagged_hint(inputs)
	if (locale === "fr") return fr_ranger_download_flagged_hint(inputs)
	if (locale === "it") return it_ranger_download_flagged_hint(inputs)
	if (locale === "nl") return nl_ranger_download_flagged_hint(inputs)
	if (locale === "pl") return pl_ranger_download_flagged_hint(inputs)
	if (locale === "pt") return pt_ranger_download_flagged_hint(inputs)
	if (locale === "ru") return ru_ranger_download_flagged_hint(inputs)
	if (locale === "sv") return sv_ranger_download_flagged_hint(inputs)
	if (locale === "tr") return tr_ranger_download_flagged_hint(inputs)
	if (locale === "zh") return zh_ranger_download_flagged_hint(inputs)
	if (locale === "ja") return ja_ranger_download_flagged_hint(inputs)
	return en_ranger_download_flagged_hint(inputs)
});
