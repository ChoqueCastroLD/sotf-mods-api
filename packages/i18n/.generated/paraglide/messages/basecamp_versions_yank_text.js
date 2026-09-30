/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Yank_TextInputs */

const en_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Players see a warning on this version and the latest good one is offered instead. You can undo it later.`)
};

const es_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los jugadores verán un aviso en esta versión y se les ofrecerá la última buena. Puedes deshacerlo más tarde.`)
};

const de_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spieler sehen bei dieser Version eine Warnung und bekommen die letzte funktionierende angeboten. Du kannst das später rückgängig machen.`)
};

const fr_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les joueurs verront un avertissement sur cette version et la dernière bonne leur sera proposée. Tu pourras annuler plus tard.`)
};

const it_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I giocatori vedranno un avviso su questa versione e verrà proposta l’ultima funzionante. Potrai annullare più tardi.`)
};

const nl_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelers zien een waarschuwing bij deze versie en krijgen de laatste goede aangeboden. Je kunt dit later ongedaan maken.`)
};

const pl_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracze zobaczą ostrzeżenie przy tej wersji i dostaną propozycję ostatniej dobrej. Możesz to później cofnąć.`)
};

const pt_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os jogadores verão um aviso nesta versão e a última boa será oferecida no lugar. Você pode desfazer depois.`)
};

const ru_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игроки увидят предупреждение у этой версии, и им будет предложена последняя рабочая. Позже это можно отменить.`)
};

const sv_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelare ser en varning på den här versionen och erbjuds den senaste fungerande i stället. Du kan ångra det senare.`)
};

const tr_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncular bu sürümde bir uyarı görür ve onlara son sağlam sürüm önerilir. Daha sonra geri alabilirsin.`)
};

const zh_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`玩家会在此版本上看到警告，并被推荐使用最近的正常版本。之后可以撤销。`)
};

const ja_basecamp_versions_yank_text = /** @type {(inputs: Basecamp_Versions_Yank_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このバージョンには警告が表示され、代わりに最新の正常なバージョンが案内されます。あとで元に戻せます。`)
};

/**
* | output |
* | --- |
* | "Players see a warning on this version and the latest good one is offered instead. You can undo it later." |
*
* @param {Basecamp_Versions_Yank_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_yank_text = /** @type {((inputs?: Basecamp_Versions_Yank_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Yank_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_yank_text(inputs)
	if (locale === "de") return de_basecamp_versions_yank_text(inputs)
	if (locale === "fr") return fr_basecamp_versions_yank_text(inputs)
	if (locale === "it") return it_basecamp_versions_yank_text(inputs)
	if (locale === "nl") return nl_basecamp_versions_yank_text(inputs)
	if (locale === "pl") return pl_basecamp_versions_yank_text(inputs)
	if (locale === "pt") return pt_basecamp_versions_yank_text(inputs)
	if (locale === "ru") return ru_basecamp_versions_yank_text(inputs)
	if (locale === "sv") return sv_basecamp_versions_yank_text(inputs)
	if (locale === "tr") return tr_basecamp_versions_yank_text(inputs)
	if (locale === "zh") return zh_basecamp_versions_yank_text(inputs)
	if (locale === "ja") return ja_basecamp_versions_yank_text(inputs)
	return en_basecamp_versions_yank_text(inputs)
});
