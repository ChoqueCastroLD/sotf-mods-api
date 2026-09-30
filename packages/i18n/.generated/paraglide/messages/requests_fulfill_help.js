/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Fulfill_HelpInputs */

const en_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick one of your published mods. The request will be marked as fulfilled and will point to it.`)
};

const es_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige uno de tus mods publicados. La petición quedará como cumplida y apuntará a él.`)
};

const de_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle einen deiner veröffentlichten Mods. Der Wunsch gilt dann als erfüllt und verweist darauf.`)
};

const fr_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez l’un de vos mods publiés. La demande sera marquée comme réalisée et pointera vers lui.`)
};

const it_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli uno dei tuoi mod pubblicati. La richiesta sarà segnata come realizzata e punterà a esso.`)
};

const nl_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een van je gepubliceerde mods. Het verzoek wordt als vervuld gemarkeerd en verwijst ernaar.`)
};

const pl_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz jednego ze swoich opublikowanych modów. Prośba zostanie oznaczona jako zrealizowana i będzie do niego prowadzić.`)
};

const pt_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um dos seus mods publicados. O pedido será marcado como atendido e apontará para ele.`)
};

const ru_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите один из своих опубликованных модов. Запрос будет отмечен выполненным и получит ссылку на него.`)
};

const sv_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en av dina publicerade moddar. Önskemålet markeras som uppfyllt och pekar på den.`)
};

const tr_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayımlanmış modlarınızdan birini seçin. İstek tamamlandı olarak işaretlenir ve ona işaret eder.`)
};

const zh_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择你已发布的一个模组，请求将标记为已完成并指向它。`)
};

const ja_requests_fulfill_help = /** @type {(inputs: Requests_Fulfill_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開済みの MOD を選んでください。リクエストは達成済みになり、その MOD へのリンクが表示されます。`)
};

/**
* | output |
* | --- |
* | "Pick one of your published mods. The request will be marked as fulfilled and will point to it." |
*
* @param {Requests_Fulfill_HelpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_fulfill_help = /** @type {((inputs?: Requests_Fulfill_HelpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Fulfill_HelpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_fulfill_help(inputs)
	if (locale === "de") return de_requests_fulfill_help(inputs)
	if (locale === "fr") return fr_requests_fulfill_help(inputs)
	if (locale === "it") return it_requests_fulfill_help(inputs)
	if (locale === "nl") return nl_requests_fulfill_help(inputs)
	if (locale === "pl") return pl_requests_fulfill_help(inputs)
	if (locale === "pt") return pt_requests_fulfill_help(inputs)
	if (locale === "ru") return ru_requests_fulfill_help(inputs)
	if (locale === "sv") return sv_requests_fulfill_help(inputs)
	if (locale === "tr") return tr_requests_fulfill_help(inputs)
	if (locale === "zh") return zh_requests_fulfill_help(inputs)
	if (locale === "ja") return ja_requests_fulfill_help(inputs)
	return en_requests_fulfill_help(inputs)
});
